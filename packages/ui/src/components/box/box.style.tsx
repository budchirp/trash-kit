import { cva } from 'class-variance-authority'

export const boxStyle = cva('w-full border relative overflow-hidden border-outline rounded-3xl', {
  variants: {
    color: {
      primary: 'bg-surface-primary text-primary',
      secondary: 'bg-surface-secondary text-primary'
    },
    blur: {
      true: 'bg-opacity-50 backdrop-blur-sm',
      false: ''
    }
  },
  defaultVariants: {
    color: 'primary',
    blur: false
  }
})
