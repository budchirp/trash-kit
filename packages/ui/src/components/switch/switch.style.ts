import { cva } from 'class-variance-authority'

export const switchTrackStyle = cva(
  'relative inline-flex shrink-0 items-center rounded-full border border-outline bg-surface-secondary p-0.5 transition-colors duration-200 has-focus-visible:ring-2 has-focus-visible:ring-accent/50',
  {
    variants: {
      size: {
        sm: 'h-5 w-9',
        md: 'h-6 w-11',
        lg: 'h-7 w-14'
      },
      color: {
        primary: 'has-checked:border-content-primary has-checked:bg-content-primary',
        secondary: 'has-checked:border-outline-hover has-checked:bg-surface-tertiary',
        accent: 'has-checked:border-outline-accent has-checked:bg-surface-accent',
        danger: 'has-checked:border-outline-danger has-checked:bg-surface-danger',
        success: 'has-checked:border-outline-success has-checked:bg-surface-success',
        warning: 'has-checked:border-outline-warning has-checked:bg-surface-warning'
      }
    },
    defaultVariants: {
      size: 'md',
      color: 'accent'
    }
  }
)

export const switchThumbStyle = cva(
  'pointer-events-none block rounded-full bg-white shadow-sm transition-transform duration-200',
  {
    variants: {
      size: {
        sm: 'size-3.5 peer-checked:translate-x-[18px]',
        md: 'size-[18px] peer-checked:translate-x-[22px]',
        lg: 'size-[22px] peer-checked:translate-x-[30px]'
      },
      color: {
        primary: 'peer-checked:bg-surface-primary',
        secondary: '',
        accent: '',
        danger: '',
        success: '',
        warning: ''
      }
    },
    defaultVariants: {
      size: 'md',
      color: 'accent'
    }
  }
)
