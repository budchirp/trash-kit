import { UserProvider } from '@/context/user'
import { UserService } from '@/service/user'

import type { PublicAPIHeaders, Trash } from '@trash-kit/common'

type AuthProviderProps = {
  children: React.ReactNode
  headers: PublicAPIHeaders & { token: string | null | undefined }
  trash: Trash
}

export const AuthProvider: React.FC<AuthProviderProps> = async ({
  children,
  headers,
  trash
}: AuthProviderProps): Promise<React.ReactNode> => {
  if (headers.token) {
    const response = await UserService.get(trash, headers)
    if (response.error) {
      return children
    }

    return <UserProvider initialUser={response.data}>{children}</UserProvider>
  }

  return children
}
