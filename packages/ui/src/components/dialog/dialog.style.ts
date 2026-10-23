import { cva } from 'class-variance-authority'

export const dialogStyle = cva(
  'relative mx-auto w-full overflow-hidden rounded-3xl border border-outline bg-surface-primary text-content-primary shadow-2xl outline-none transition-all duration-200 data-closed:scale-95 data-closed:opacity-0 data-enter:scale-100 data-enter:opacity-100 data-leave:scale-95 data-leave:opacity-0',
  {
    variants: {
      size: {
        sm: 'max-w-sm',
        md: 'max-w-lg',
        lg: 'max-w-2xl'
      }
    },
    defaultVariants: {
      size: 'md'
    }
  }
)
