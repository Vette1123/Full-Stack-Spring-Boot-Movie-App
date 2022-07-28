import HttpClient from "./HttpClient";

export default class FetchHttpClient implements HttpClient {

    async get<T>(url: string, queryParams: Map<string, string>): Promise<T> {
        const queryParamsStrings = Object.keys(queryParams.keys)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(queryParams.get(k) as string))
            .join('&');
        const response = await fetch(url + queryParamsStrings);
        const content = await response.json();

        return content as T;
    }
}