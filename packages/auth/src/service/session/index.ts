import { Fetch } from '@trash-kit/common'

import type {
  APIHeaders,
  APIResponse,
  ServiceResponse,
  PublicAPIHeaders,
  Trash
} from '@trash-kit/common'
import type { SignInFormValues } from '@/service/session/schemas'

export class SessionService {
  public static async create(
    trash: Trash,
    headers: PublicAPIHeaders,
    values: SignInFormValues
  ): Promise<ServiceResponse<string>> {
    try {
      const { json } = await Fetch.post<APIResponse<{ token: string }>>(
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
        data: null
      }
    } catch (error) {
      console.error(error)

      return {
        error: true,
        message: null,
        data: null
      }
    }
  }

  public static async verify(trash: Trash, headers: APIHeaders): Promise<ServiceResponse> {
    try {
      const { json } = await Fetch.get<APIResponse>(
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
        data: null
      }
    } catch (error) {
      console.error(error)

      return {
        error: true,
        message: null,
        data: null
      }
    }
  }

  public static async delete(
    trash: Trash,
    headers: APIHeaders,
    session: string | null | undefined = null
  ): Promise<ServiceResponse> {
    try {
      const { json } = session
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
        data: null
      }
    } catch (error) {
      console.error(error)

      return {
        error: true,
        message: null,
        data: null
      }
    }
  }
}

export * from '@/service/session/schemas'
