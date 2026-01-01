import { cva } from 'class-variance-authority'

export const tagStyle = cva('border border-outline rounded-3xl py-1 px-2', {
  variants: {
    color: {
      accent: 'bg-primary-accent text-white',
      primary: 'bg-surface-primary text-primary',
      secondary: 'bg-surface-secondary text-primary'
    }
  },
  defaultVariants: {
    color: 'primary'
  }
})
