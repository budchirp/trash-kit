import { cva } from 'class-variance-authority'

export const progressStyle = cva('w-full', {
  variants: {
    size: {
      sm: 'h-1.5',
      md: 'h-2.5',
      lg: 'h-4'
    }
  },
  defaultVariants: {
    size: 'md'
  }
})

export const progressBarStyle = cva('h-full rounded-full transition-all duration-300', {
  variants: {
    color: {
      primary: 'bg-content-primary',
      secondary: 'bg-surface-tertiary',
      accent: 'bg-surface-accent'
    }
  },
  defaultVariants: {
    color: 'accent'
  }
})
