import type { ComponentProps } from 'react'

import type { InputSharedProps } from '@/components/input'

export type FileFieldProps = InputSharedProps &
  Omit<ComponentProps<'input'>, 'children' | 'color' | 'type'>
