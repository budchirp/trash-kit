type FetchHeaders = Record<string, string | null | undefined>
type FetchBody = Record<string, unknown> | FormData
type FetchMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

export class Fetch {
  private static async request<T>(
    url: string,
    method: FetchMethod,
    body?: FetchBody,
    headers?: FetchHeaders
  ) {
    const baseHeaders: FetchHeaders = {
      ...(body instanceof FormData ? {} : { 'Content-Type': 'application/json' }),
      ...headers
    }
    const requestHeaders = Object.fromEntries(
      Object.entries(baseHeaders).filter(
        (entry): entry is [string, string] => entry[1] !== null && entry[1] !== undefined
      )
    )
    const requestBody = body instanceof FormData ? body : JSON.stringify(body)

    const response = await fetch(url, {
      method,
      headers: requestHeaders,
      body: requestBody
    })

    const json = (await response.json()) as T

    return {
      json,
      response
    }
  }

  public static get<T>(url: string, headers?: FetchHeaders) {
    return Fetch.request<T>(url, 'GET', undefined, headers)
  }

  public static post<T>(url: string, body?: FetchBody, headers?: FetchHeaders) {
    return Fetch.request<T>(url, 'POST', body, headers)
  }

  public static put<T>(url: string, body?: FetchBody, headers?: FetchHeaders) {
    return Fetch.request<T>(url, 'PUT', body, headers)
  }

  public static delete<T>(url: string, headers?: FetchHeaders) {
    return Fetch.request<T>(url, 'DELETE', undefined, headers)
  }

  public static patch<T>(url: string, body?: FetchBody, headers?: FetchHeaders) {
    return Fetch.request<T>(url, 'PATCH', body, headers)
  }
}
