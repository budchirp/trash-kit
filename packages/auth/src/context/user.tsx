'use client'

import { useState } from 'react'

import { createContext } from '@trash-kit/common'

import type { User } from '@/types/user'

const [InternalUserProvider, useUser, UserContext] = createContext<{
  user: User
  setUser: (user: User) => void
}>({
  name: 'UserContext',
  defaultValue: null
})

type UserProviderProps = {
  children: React.ReactNode
  initialUser: User
}

const UserProvider: React.FC<UserProviderProps> = ({
  children,
  initialUser
}: UserProviderProps): React.ReactNode => {
  const [user, setUser] = useState<User>(initialUser)

  return <InternalUserProvider value={{ user, setUser }}>{children}</InternalUserProvider>
}

export { UserProvider, useUser, UserContext }
