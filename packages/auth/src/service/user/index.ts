import { Fetch } from '@trash-kit/common'

import type {
  APIHeaders,
  APIResponse,
  ServiceResponse,
  PublicAPIHeaders,
  Trash
} from '@trash-kit/common'
import type { SignUpFormValues } from '@/service/user/schemas'
import type { User } from '@/types/user'

export class UserService {
  public static async create(
    trash: Trash,
    headers: PublicAPIHeaders,
    values: SignUpFormValues
  ): Promise<ServiceResponse> {
    try {
      const { json } = await Fetch.post<APIResponse>(
        `${trash.context.apiUrl}/user`,
        values,
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

  public static async get(
    trash: Trash,
    headers: Omit<APIHeaders, 'token'> & { token?: string | null }
  ): Promise<ServiceResponse<User>> {
    try {
      const { json } = await Fetch.get<APIResponse<User>>(`${trash.context.apiUrl}/user`, headers)

      if (!json.error) {
        return {
          error: false,
          message: json.message,
          data: json.data
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

export * from '@/service/user/schemas'
