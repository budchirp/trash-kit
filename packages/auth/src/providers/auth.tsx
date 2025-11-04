import { UserProvider } from '@/context/user'
import { UserService } from '@/service/user'

import type { Trash } from '@trash-kit/core'

type AuthProviderProps = {
  children: React.ReactNode
  token?: string
  locale?: string
  trash: Trash
  ErrorComponent: ({ error }: { error: { message: string; status: number } }) => React.ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = async ({
  children,
  token,
  locale,
  trash,
  ErrorComponent
}: AuthProviderProps): Promise<React.ReactNode> => {
  if (token) {
    const { error, message, status, data } = await UserService.get(trash, { token, locale })
    if (error) {
      return (
        <ErrorComponent
          error={{
            message,
            status
          }}
        />
      )
    }

    return <UserProvider initialUser={data}>{children}</UserProvider>
  }

  return children
}
