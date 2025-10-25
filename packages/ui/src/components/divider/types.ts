import type { ComponentProps } from 'react'

import type { VariantProps } from 'class-variance-authority'

import type { dividerStyle } from '@/components/divider/divider.style'

export type DividerProps = ComponentProps<'div'> & {
  className?: string
} & VariantProps<typeof dividerStyle>
