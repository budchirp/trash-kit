import type { ComponentProps } from 'react'

import type { VariantProps } from 'class-variance-authority'

import type { headingStyle } from '@/components/heading/heading.style'

export type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type HeadingProps = Omit<ComponentProps<'h1'>, 'color'> &
  VariantProps<typeof headingStyle> & {
    as?: HeadingElement
    children?: Children
  }
