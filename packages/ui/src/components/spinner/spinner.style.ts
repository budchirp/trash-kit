import { cva } from 'class-variance-authority'

export const spinnerStyle = cva('shrink-0 animate-spin', {
  variants: {
    size: {
      sm: 'size-4',
      md: 'size-5',
      lg: 'size-8'
    }
  },
  defaultVariants: {
    size: 'md'
  }
})
