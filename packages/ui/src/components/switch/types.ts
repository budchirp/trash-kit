import type { ComponentProps, ReactNode } from 'react'

import type { VariantProps } from 'class-variance-authority'

import type { switchTrackStyle } from '@/components/switch/switch.style'

export type SwitchProps = Omit<ComponentProps<'input'>, 'type' | 'color' | 'size'> &
  VariantProps<typeof switchTrackStyle> & {
    children?: ReactNode
    indicatorClassName?: string
  }
