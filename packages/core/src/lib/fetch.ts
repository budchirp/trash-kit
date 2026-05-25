type FetchHeaders = Record<string, string | null | undefined>
type FetchBody = Record<string, unknown> | FormData
type FetchMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

export class Fetch {
  private static fetch = async <T>(
    url: string,
    method: FetchMethod,
    headers?: FetchHeaders,
    body?: FetchBody
  ): Promise<{
    json: T
    response: Response
  }> => {
    const { jwt, locale, ...customHeaders } = headers ?? {}
    const requestHeaders: Record<string, string> = {
      ...(body instanceof FormData ? {} : { 'Content-Type': 'application/json' }),
      ...(jwt ? { Authorization: `Bearer ${jwt}` } : {}),
      ...(locale ? { 'Accept-Language': locale } : {})
    }

    for (const [key, value] of Object.entries(customHeaders)) {
      if (value !== null && value !== undefined) {
        requestHeaders[key] = value
      }
    }

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

  public static get = <T>(url: string, headers?: FetchHeaders) =>
    Fetch.fetch<T>(url, 'GET', headers, undefined)

  public static post = <T>(url: string, body?: FetchBody, headers?: FetchHeaders) =>
    Fetch.fetch<T>(url, 'POST', headers, body)

  public static put = <T>(url: string, body?: FetchBody, headers?: FetchHeaders) =>
    Fetch.fetch<T>(url, 'PUT', headers, body)

  public static delete = <T>(url: string, headers?: FetchHeaders) =>
    Fetch.fetch<T>(url, 'DELETE', headers, undefined)

  public static patch = <T>(url: string, body?: FetchBody, headers?: FetchHeaders) =>
    Fetch.fetch<T>(url, 'PATCH', headers, body)
}
