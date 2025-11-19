'use client'

import { createContext, useState } from 'react'

import { SessionService } from '@/service/session'

import type { User } from '@/types/user'
import type { Trash } from '@trash-kit/core'

export const UserContext = createContext<{
  user: User | null
  setUser: (user: User | null) => void
  logout: (trash: Trash, token: string, session?: string) => Promise<void>
}>({
  user: null,
  setUser: () => {},
  logout: async () => {}
})

type UserProviderProps = {
  children: React.ReactNode
  initialUser: User
}

export const UserProvider: React.FC<UserProviderProps> = ({
  children,
  initialUser
}: UserProviderProps): React.ReactNode => {
  const [user, setUser] = useState<User | null>(initialUser)

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        logout: async (trash: Trash, token: string, session?: string) => {
          await SessionService.delete(trash, session ?? null, {
            token
          })

          setUser(null)
        }
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
