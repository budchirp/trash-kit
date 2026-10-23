import type { ComponentProps, ReactNode } from 'react'

import type { VariantProps } from 'class-variance-authority'

import type { progressBarStyle, progressStyle } from '@/components/progress/progress.style'

export type ProgressProps = Omit<ComponentProps<'div'>, 'children' | 'color'> &
  Pick<VariantProps<typeof progressStyle>, 'size'> &
  Pick<VariantProps<typeof progressBarStyle>, 'color'> & {
    value?: number
    max?: number
    label?: ReactNode
    showValue?: boolean
    indeterminate?: boolean
    barClassName?: string
  }
