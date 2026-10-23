import type { ComponentProps, ReactNode } from 'react'

import type { VariantProps } from 'class-variance-authority'

import type { dialogStyle } from '@/components/dialog/dialog.style'

export type DialogProps = Pick<VariantProps<typeof dialogStyle>, 'size'> & {
  open: boolean
  onClose: () => void
  children?: ReactNode
  className?: string
  backdropClassName?: string
  role?: 'dialog' | 'alertdialog'
  'aria-label'?: string
  'aria-labelledby'?: string
  'aria-describedby'?: string
}

export type DialogContentProps = ComponentProps<'div'>

export type DialogActionsProps = ComponentProps<'div'>
