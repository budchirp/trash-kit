'use client'

import { createContext } from '@/hooks/create-context'

export type FieldContextValue = {
  id: string
  name: string
  disabled?: boolean
  required?: boolean
  invalid?: boolean
  describedBy?: string
}

export const [FieldProvider, useFieldContext, FieldContext, useOptionalFieldContext] =
  createContext<FieldContextValue>({
    name: 'Field'
  })
