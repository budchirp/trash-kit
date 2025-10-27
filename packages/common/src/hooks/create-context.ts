'use client'

import { type Context, createContext as createReactContext, type Provider, use } from 'react'

export type CreateContextProps<T> = {
  name?: string
  defaultValue?: T | null | undefined
}

export type CreateContextReturnProps<T> = [
  Provider<T | null | undefined>,
  () => T,
  Context<T | null | undefined>
]

export const createContext = <T>({
  name = 'Context',
  defaultValue = null
}: CreateContextProps<T>): CreateContextReturnProps<T> => {
  const Context = createReactContext<T | null | undefined>(defaultValue)

  const useContext = (): T => {
    const context = use(Context)
    if (!context) {
      throw new Error(`Can't find context, ${name}`)
    }

    return context as T
  }

  return [Context.Provider, useContext, Context]
}
