import type { ComponentProps } from 'react'

import type { VariantProps } from 'class-variance-authority'

import type { boxStyle } from '@/components/box/box.style'
import type { boxContentStyle } from '@/components/box/box-content.style'

export type BoxProps = ComponentProps<'div'> &
  VariantProps<typeof boxStyle> & {
    children?: Children
  }

export type BoxContentProps = ComponentProps<'div'> &
  VariantProps<typeof boxContentStyle> & {
    children?: Children
  }
