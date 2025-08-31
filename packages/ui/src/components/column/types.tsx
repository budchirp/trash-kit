import type { ComponentProps } from 'react'

import type { VariantProps } from 'class-variance-authority'

import type { columnStyle } from '@/components/column/column.style'

export type ColumnProps = ComponentProps<'div'> &
  VariantProps<typeof columnStyle> & {
    children?: Children
  }
