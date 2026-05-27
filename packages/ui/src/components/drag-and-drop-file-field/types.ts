import type { ComponentProps } from 'react'

export type DragAndDropFileFieldProps = ComponentProps<'input'> & {
  children?: Children
  description?: Children
  onFiles?: (files: FileList) => void
}
