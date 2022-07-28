export default interface HttpClient {
    get<T>(url: string, queryParams: Map<string, string>): Promise<T>;
}