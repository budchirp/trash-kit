import type { ComponentProps, ReactNode } from 'react'

import type { VariantProps } from 'class-variance-authority'

import type { radioIndicatorStyle } from '@/components/radio-group/radio.style'
import type { Orientation, Color } from '@/lib/variants'

export type RadioGroupProps = Omit<ComponentProps<'div'>, 'color' | 'defaultValue' | 'onChange'> & {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  orientation?: Orientation
  disabled?: boolean
  color?: Color
  name?: string
  required?: boolean
  children?: ReactNode
}

export type RadioProps = Omit<
  ComponentProps<'input'>,
  'type' | 'color' | 'value' | 'checked' | 'defaultChecked' | 'onChange'
> &
  Pick<VariantProps<typeof radioIndicatorStyle>, 'color'> & {
    value: string
    children?: ReactNode
    indicatorClassName?: string
  }
