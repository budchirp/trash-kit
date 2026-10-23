import type { ComponentProps } from 'react'

import type { VariantProps } from 'class-variance-authority'

import type { spinnerStyle } from '@/components/spinner/spinner.style'

export type SpinnerProps = ComponentProps<'svg'> &
  VariantProps<typeof spinnerStyle> & {
    label?: string
  }
