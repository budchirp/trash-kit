import { cva } from 'class-variance-authority'

export const avatarStyle = cva(
  'inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-outline bg-surface-secondary font-medium text-content-primary',
  {
    variants: {
      size: {
        sm: 'size-8 text-xs',
        md: 'size-10 text-sm',
        lg: 'size-12 text-base',
        xl: 'size-16 text-lg'
      }
    },
    defaultVariants: {
      size: 'md'
    }
  }
)

export const avatarStatusStyle = cva(
  'absolute right-0 bottom-0 rounded-full ring-2 ring-surface-primary',
  {
    variants: {
      status: {
        online: 'bg-surface-success',
        offline: 'bg-surface-tertiary',
        busy: 'bg-surface-danger',
        away: 'bg-surface-warning'
      },
      size: {
        sm: 'size-2',
        md: 'size-2.5',
        lg: 'size-3',
        xl: 'size-3.5'
      }
    },
    defaultVariants: {
      status: 'online',
      size: 'md'
    }
  }
)
