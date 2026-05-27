import type { InputProps } from '@/components/input'

export type FileFieldProps = Omit<InputProps, 'type'> & {
  children?: Children
}
