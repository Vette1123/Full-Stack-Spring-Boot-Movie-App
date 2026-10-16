# Full-Stack Movie App — Spring Boot + React

A movie catalogue split into a Spring Boot REST backend and a TypeScript React
frontend, kept as two applications in one repository and wired together with
Docker Compose.

> **Demo offline.** The hosted frontend is no longer running. See **Running locally** below to start both apps with Docker Compose.

## Features

- Browse a paginated movie grid
- Movie detail page with poster art, backdrops, trailers and cast
- Reviews attached to a movie, submitted from the detail page
- Header slideshow of featured titles
- Search input over the catalogue
- Integration tests against the API layer

## Stack

**Backend** — Java · Spring Boot · Spring Data repositories · Maven
**Frontend** — React · TypeScript · Create React App · React Router
**Infra** — Docker + Docker Compose (frontend on `:3000`, API on `:8080`)

## Architecture

The backend is deliberately layered rather than flat — the controller never
touches persistence directly:

```
api/MoviesController        # HTTP surface, request/response only
  └── facades/MovieFacade   # orchestration, the use case
        ├── services/MovieDBService
        ├── mappers/MovieMapper     # entity → DTO
        └── reposotiry/MovieRepository
model/Movie · dtos/MovieDto · dtos/MoviePage
```

Each layer has one reason to change. The mapper exists so the persistence model
and the JSON contract can drift apart without breaking either: adding a column
does not silently widen the API response, and renaming a DTO field does not
touch the schema.

The frontend mirrors that separation — `services/MovieService` and
`services/api.ts` own every network call, and `models/Movie.ts` and
`models/MoviePage.ts` type the responses, so no component constructs a URL.

```
movies-backend/     # Spring Boot API
movies-frontend/    # React client
docker-compose.yml  # both, together
```

## Running locally

**Everything at once:**

```bash
git clone https://github.com/Vette1123/Full-Stack-Spring-Boot-Movie-App.git
cd Full-Stack-Spring-Boot-Movie-App
docker compose up --build
```

Frontend on `http://localhost:3000`, API on `http://localhost:8080`.

**Separately**, if you want hot reload:

```bash
cd movies-backend  && ./mvnw spring-boot:run     # configure your datasource first
cd movies-frontend && npm install && npm start
```

## Tests

```bash
cd movies-backend && ./mvnw test
```

`MoviesControllerIT` and `AbstractControllerIT` exercise the API through the
full Spring context rather than mocking the layers underneath — slower than
unit tests, and the only kind that would have caught a broken bean wiring or a
mapper that silently drops a field.

## Notes

Built in 2022 while learning the Spring ecosystem. The part that took longest
to trust, coming from JavaScript, was inversion of control: dependencies arrive
as constructor parameters instead of being constructed where they are used, and
`MovieRepository` is an *interface* the framework implements at runtime from
the method names alone. Code that works without an implementation you can open
and read takes a while to stop feeling like magic.

---

Built by [Mohamed Gado](https://mohamedgado.com) · 2022
