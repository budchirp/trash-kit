'use client'

import type React from 'react'
import type { ComponentProps } from 'react'

import { Toaster } from 'sonner'

export type ToastProviderProps = ComponentProps<typeof Toaster>

export const ToastProvider: React.FC<ToastProviderProps> = (
  props: ToastProviderProps
): React.ReactNode => {
  return <Toaster {...props} />
}
