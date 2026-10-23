import type { ComponentProps, ReactNode } from 'react'

import type { VariantProps } from 'class-variance-authority'

import type { checkboxIndicatorStyle } from '@/components/checkbox/checkbox.style'

export type CheckboxProps = Omit<ComponentProps<'input'>, 'type' | 'color'> &
  Pick<VariantProps<typeof checkboxIndicatorStyle>, 'color'> & {
    children?: ReactNode
    indicatorClassName?: string
  }
