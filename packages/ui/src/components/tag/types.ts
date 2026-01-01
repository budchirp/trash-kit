import type { ComponentProps } from 'react'

import type { VariantProps } from 'class-variance-authority'

import type { tagStyle } from '@/components/tag/tag.style'

export type TagProps = ComponentProps<'div'> &
  VariantProps<typeof tagStyle> & {
    children?: Children
  }
