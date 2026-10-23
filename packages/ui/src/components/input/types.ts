import type { ComponentProps, ReactNode } from 'react'

import type { VariantProps } from 'class-variance-authority'

import type { inputWrapperStyle } from '@/components/input/input.style'

export type InputSharedProps = Pick<VariantProps<typeof inputWrapperStyle>, 'color'> & {
  icons?: {
    leading?: ReactNode
    trailing?: ReactNode
  }
  inputClassName?: string
}

export type InputProps =
  | (InputSharedProps &
      Omit<ComponentProps<'input'>, 'children' | 'color'> & {
        textarea?: false
      })
  | (InputSharedProps &
      Omit<ComponentProps<'textarea'>, 'children' | 'color'> & {
        textarea: true
      })
