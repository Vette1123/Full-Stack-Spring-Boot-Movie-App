class Response<T> {
  constructor(public status: number, public data?: T, public errors?: any) {}
}
export const fetchData = async <T>(
  url: string,
  method: string,
  data: any,
  json = true
): Promise<Response<T>> =>
  fetch(url, {
    method,
    headers: {
      ...(['POST', 'PUT', 'PATCH'].includes(method) &&
        json && { 'Content-Type': 'application/json' }),
    },
    ...(data && { body: json ? JSON.stringify(data) : data }),
  })
    .then((r) => {
      return Promise.all([Promise.resolve(r.status), r.json()])
    })
    .then(([status, data]) => {
      if (status >= 200 && status < 300) {
        return new Response<T>(status, data, undefined)
      } else {
        return new Response<T>(status, undefined, data)
      }
    })
    .catch((err) => {
      return new Response<T>(999, undefined, err)
    })
