'use client'

import { type Context, createContext as createReactContext, type Provider, use } from 'react'

export type CreateContextProps<T> = {
  name?: string
  defaultValue?: T | null | undefined
}

export type CreateContextReturnProps<T> = [
  Provider<T | null | undefined>,
  () => T,
  Context<T | null | undefined>,
  () => T | null | undefined
]

export const createContext = <T>({
  name = 'Context',
  defaultValue = null
}: CreateContextProps<T>): CreateContextReturnProps<T> => {
  const Context = createReactContext<T | null | undefined>(defaultValue)

  const useContext = (): T => {
    const context = use(Context)
    if (context === null || context === undefined) {
      throw new Error(`Can't find context, ${name}`)
    }

    return context
  }

  const useOptionalContext = (): T | null | undefined => use(Context)

  return [Context.Provider, useContext, Context, useOptionalContext]
}
