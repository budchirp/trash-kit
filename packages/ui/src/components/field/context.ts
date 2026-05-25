'use client'

import { createContext } from 'react'

export type FieldContextValue = {
  name: string
}

export const FieldContext = createContext<FieldContextValue | null>(null)
