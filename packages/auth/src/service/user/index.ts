import { Fetch } from '@trash-kit/core'

import type { NewUserValues } from '@/service/user/schemas'
import type { User } from '@/types/user'

import type {
  APIHeaders,
  APIResponse,
  ServiceResponse,
  PublicAPIHeaders,
  Trash
} from '@trash-kit/core'

export class UserService {
  public static async create(
    trash: Trash,
    values: NewUserValues,
    headers: PublicAPIHeaders
  ): Promise<ServiceResponse> {
    try {
      const { json, response } = await Fetch.post<APIResponse>(
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

  public static async get(trash: Trash, headers: APIHeaders): Promise<ServiceResponse<User>> {
    try {
      const { json, response } = await Fetch.get<APIResponse<User>>(
        `${trash.context.apiUrl}/user`,
        headers
      )

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

export * from '@/service/user/schemas'
