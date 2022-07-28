package net.talaatharb.movies.api;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.CoreMatchers.notNullValue;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.test.web.servlet.ResultActions;

class MoviesControllerIT extends AbstractControllerIT{

	@Test
	void testCallingGetPopularMoviesWithPageReturnsPageOfMovies() throws Exception {
		// Arrange (Given)
		final int page = 1;
		final String url = "/api/v1/movies/popular";
		
		// Action (When)
		ResultActions result = this.mvc.perform(get(url).queryParam("page", page + ""));
		
		// Assert (Then)
		result.andExpect(status().isOk()).andExpect(jsonPath("$.page", is(page))).andExpect(jsonPath("$.results", notNullValue()));
	}
}
