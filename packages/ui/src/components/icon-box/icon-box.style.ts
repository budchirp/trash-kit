import { cva } from 'class-variance-authority'

export const iconBoxStyle = cva(
  'inline-flex shrink-0 items-center justify-center rounded-full border text-sm font-medium',
  {
    variants: {
      color: {
        primary: 'border-outline bg-surface-primary text-content-primary',
        secondary: 'border-outline bg-surface-secondary text-content-primary',
        accent: 'border-outline-accent bg-surface-accent text-surface-content-accent',
        danger: 'border-outline-danger bg-surface-danger text-surface-content-danger',
        success: 'border-outline-success bg-surface-success text-surface-content-success',
        warning: 'border-outline-warning bg-surface-warning text-surface-content-warning'
      },
      size: {
        sm: 'size-8 [&>svg]:size-4',
        md: 'size-10 [&>svg]:size-5',
        lg: 'size-12 [&>svg]:size-6'
      }
    },
    defaultVariants: {
      color: 'secondary',
      size: 'md'
    }
  }
)
