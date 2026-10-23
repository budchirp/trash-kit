import { cva } from 'class-variance-authority'

export const inputWrapperStyle = cva(
  'flex w-full overflow-hidden rounded-3xl border transition duration-300 hover:border-outline-hover focus-within:border-outline-hover',
  {
    variants: {
      color: {
        primary: 'border-outline bg-surface-primary text-content-primary',
        secondary: 'border-outline bg-surface-secondary text-content-primary'
      },
      disabled: {
        true: 'cursor-not-allowed opacity-50',
        false: ''
      }
    },
    defaultVariants: {
      color: 'primary',
      disabled: false
    }
  }
)

export const inputElementStyle = 'w-full bg-transparent outline-none placeholder:opacity-60'

export const textareaElementStyle = 'min-h-20 resize-y'
