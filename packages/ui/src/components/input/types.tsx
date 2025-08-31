import type { ComponentProps } from 'react'

export type InputProps = ComponentProps<'input'> & {
  icons?: {
    leading?: Children
    trailing?: Children
  }
}
