import { cva } from 'class-variance-authority'

export const buttonStyle = cva(
  'flex items-center justify-center gap-2 rounded-full cursor-pointer w-fit font-medium transition-all duration-300 border active:scale-95 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      shape: {
        default: 'px-4 py-1',
        circle: 'size-10 shrink-0 p-0'
      },
      color: {
        accent:
          'bg-surface-accent hover:bg-surface-accent-hover text-surface-content-accent border-outline-accent hover:border-outline-accent-hover',
        primary:
          'bg-surface-primary hover:bg-surface-secondary text-content-primary border-outline hover:border-outline-hover',
        secondary:
          'bg-surface-secondary hover:bg-surface-tertiary text-content-primary border-outline hover:border-outline-hover',
        danger:
          'bg-surface-danger hover:bg-surface-danger-hover text-surface-content-danger border-outline-danger hover:border-outline-danger-hover',
        success:
          'bg-surface-success hover:bg-surface-success-hover text-surface-content-success border-outline-success hover:border-outline-success-hover',
        warning:
          'bg-surface-warning hover:bg-surface-warning-hover text-surface-content-warning border-outline-warning hover:border-outline-warning-hover'
      }
    },
    defaultVariants: {
      shape: 'default',
      color: 'accent'
    }
  }
)
