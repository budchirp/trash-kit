import { Fetch } from '@trash-kit/core'

import type { NewSessionValues } from '@/service/session/schemas'

import type {
  APIHeaders,
  APIResponse,
  ServiceResponse,
  PublicAPIHeaders,
  Trash
} from '@trash-kit/core'

export class SessionService {
  public static async create(
    trash: Trash,
    values: NewSessionValues,
    headers: PublicAPIHeaders
  ): Promise<ServiceResponse<string>> {
    try {
      const { json, response } = await Fetch.post<APIResponse<{ token: string }>>(
        `${trash.context.apiUrl}/session`,
        values,
        headers
      )

      if (!json.error) {
        return {
          error: false,
          message: json.message,
          data: json.data.token
        }
      }

      return {
        error: true,
        message: json.message,
        status: response.status,
        data: null
      }
    } catch (error) {
      console.error(error)

      return {
        error: true,
        message: 'Internal server error',
        status: 500,
        data: null
      }
    }
  }

  public static async verify(trash: Trash, headers: APIHeaders): Promise<ServiceResponse> {
    try {
      const { json, response } = await Fetch.get<APIResponse>(
        `${trash.context.apiUrl}/session/verify`,
        headers
      )

      if (!json.error) {
        return {
          error: false,
          message: json.message,
          data: null
        }
      }

      return {
        error: true,
        message: json.message,
        status: response.status,
        data: null
      }
    } catch (error) {
      console.error(error)

      return {
        error: true,
        message: 'Internal server error',
        status: 500,
        data: null
      }
    }
  }

  public static async delete(
    trash: Trash,
    session: string | null,
    headers: APIHeaders
  ): Promise<ServiceResponse> {
    try {
      const { json, response } = session
        ? await Fetch.delete<APIResponse>(`${trash.context.apiUrl}/session/${session}`, headers)
        : await Fetch.delete<APIResponse>(`${trash.context.apiUrl}/session`, headers)

      if (!json.error) {
        return {
          error: false,
          message: json.message,
          data: null
        }
      }

      return {
        error: true,
        message: json.message,
        status: response.status,
        data: null
      }
    } catch (error) {
      console.error(error)

      return {
        error: true,
        message: 'Internal server error',
        status: 500,
        data: null
      }
    }
  }
}

export * from '@/service/session/schemas'
