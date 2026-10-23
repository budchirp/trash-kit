import type { ComponentProps } from 'react'

import type { VariantProps } from 'class-variance-authority'

import type { boxStyle } from '@/components/box/box.style'

export type TagProps = Omit<ComponentProps<'span'>, 'color'> &
  VariantProps<typeof boxStyle> & {
    as?: 'span' | 'div'
  }
