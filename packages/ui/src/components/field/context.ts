'use client'

import { createContext } from 'react'

export const FieldContext = createContext<{ name: string } | null>(null)
