import type { ComponentProps } from 'react'

import type { VariantProps } from 'class-variance-authority'

import type { headingStyle } from '@/components/heading/heading.style'

export type HeadingProps = ComponentProps<'h1'> &
  VariantProps<typeof headingStyle> & {
    children?: Children
  }
