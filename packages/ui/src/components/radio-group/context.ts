'use client'

import { createContext } from '@/hooks/create-context'

import type { Color } from '@/lib/variants'

export type RadioGroupContextValue = {
  name?: string
  value?: string
  disabled?: boolean
  required?: boolean
  color?: Color
  onSelect: (value: string) => void
}

export const [RadioGroupProvider, useRadioGroupContext] = createContext<RadioGroupContextValue>({
  name: 'RadioGroup'
})
