export type APIHeaders = {
  token: string
  locale?: string
  [key: string]: string | undefined
}

export type PublicAPIHeaders = Omit<APIHeaders, 'token'>

export type APIResponse<T = any> = {
  error: boolean
  message: string
  data: T
}

export type ServiceResponse<T = undefined | null> =
  | {
      error: false
      message: string
      status: never
      data: T
    }
  | {
      error: true
      message: string
      status: number
      data: null
    }
