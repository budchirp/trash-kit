import type { ComponentProps } from 'react'

import type { VariantProps } from 'class-variance-authority'

import type { boxStyle } from '@/components/box/box.style'

export type TagProps = ComponentProps<'div'> &
  VariantProps<typeof boxStyle> & {
    children?: Children
  }
