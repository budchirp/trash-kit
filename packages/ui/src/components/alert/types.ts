import type { ComponentProps, ReactNode } from 'react'

import type { VariantProps } from 'class-variance-authority'

import type { alertStyle } from '@/components/alert/alert.style'

export type AlertProps = Omit<ComponentProps<'div'>, 'title' | 'color'> &
  VariantProps<typeof alertStyle> & {
    title?: ReactNode
    description?: ReactNode
    icon?: ReactNode
    action?: ReactNode
    onClose?: () => void
  }
