import type { ComponentProps, ReactNode } from 'react'

import type { VariantProps } from 'class-variance-authority'

import type { boxStyle } from '@/components/box/box.style'

export type DragAndDropFileFieldProps = Omit<ComponentProps<'input'>, 'children' | 'color'> &
  Pick<VariantProps<typeof boxStyle>, 'color'> & {
    children?: ReactNode
    description?: ReactNode
    contentClassName?: string
    onFiles?: (files: FileList) => void
  }
