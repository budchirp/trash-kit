import { cva } from 'class-variance-authority'

export const boxStyle = cva(
  'w-full border relative overflow-hidden transition-all duration-300 rounded-3xl',
  {
    variants: {
      color: {
        primary: 'bg-surface-primary text-content-primary border-outline',
        secondary: 'bg-surface-secondary text-content-primary border-outline',
        accent: 'bg-surface-accent text-surface-content-accent border-outline-accent',
        danger: 'bg-surface-danger text-surface-content-danger border-outline-danger',
        success: 'bg-surface-success text-surface-content-success border-outline-success',
        warning: 'bg-surface-warning text-surface-content-warning border-outline-warning'
      },
      clickable: {
        true: 'cursor-pointer active:scale-[0.99]',
        false: 'cursor-default'
      },
      disabled: {
        true: 'opacity-50 pointer-events-none',
        false: ''
      }
    },
    compoundVariants: [
      {
        clickable: true,
        color: 'primary',
        className: 'hover:bg-surface-secondary hover:border-outline-hover'
      },
      {
        clickable: true,
        color: 'secondary',
        className: 'hover:bg-surface-tertiary hover:border-outline-hover'
      },
      {
        clickable: true,
        color: 'accent',
        className: 'hover:bg-surface-accent-hover hover:border-outline-accent-hover'
      },
      {
        clickable: true,
        color: 'danger',
        className: 'hover:bg-surface-danger-hover hover:border-outline-danger-hover'
      },
      {
        clickable: true,
        color: 'success',
        className: 'hover:bg-surface-success-hover hover:border-outline-success-hover'
      },
      {
        clickable: true,
        color: 'warning',
        className: 'hover:bg-surface-warning-hover hover:border-outline-warning-hover'
      }
    ],
    defaultVariants: {
      color: 'primary',
      clickable: false,
      disabled: false
    }
  }
)
