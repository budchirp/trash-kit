import { cva } from 'class-variance-authority'

export const radioIndicatorStyle = cva(
  'flex size-6 shrink-0 items-center justify-center rounded-full border border-outline bg-surface-secondary p-1 text-transparent transition-colors',
  {
    variants: {
      color: {
        primary:
          'peer-checked:border-outline-hover peer-checked:bg-surface-primary peer-checked:text-content-primary',
        secondary:
          'peer-checked:border-outline-hover peer-checked:bg-surface-tertiary peer-checked:text-content-primary',
        accent:
          'peer-checked:border-outline-accent peer-checked:bg-surface-accent peer-checked:text-surface-content-accent',
        danger:
          'peer-checked:border-outline-danger peer-checked:bg-surface-danger peer-checked:text-surface-content-danger',
        success:
          'peer-checked:border-outline-success peer-checked:bg-surface-success peer-checked:text-surface-content-success',
        warning:
          'peer-checked:border-outline-warning peer-checked:bg-surface-warning peer-checked:text-surface-content-warning'
      }
    },
    defaultVariants: {
      color: 'accent'
    }
  }
)
