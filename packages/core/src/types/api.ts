export type APIResponse<T = any> = {
  error: boolean
  message: string
  data: T
}

export type ServiceResponse<T = null> =
  | {
      error: false
      message: string
      status: 200
      data: T
    }
  | {
      error: true
      message: string
      status: number
      data: null
    }
