import type { ComponentProps } from 'react'

import type { VariantProps } from 'class-variance-authority'

import type { buttonStyle } from '@/components/button/button.style'

export type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof buttonStyle> & {
    children?: Children
  } & {
    loading?: boolean
  }
