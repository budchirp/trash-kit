import { cva } from 'class-variance-authority'

export const buttonStyle = cva(
  'flex items-center justify-center cursor-pointer w-fit font-medium transition-all duration-300 border active:scale-95 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      shape: {
        default: 'rounded-2xl px-4 py-1',
        circle: 'rounded-full p-2'
      },
      color: {
        accent:
          'bg-surface-primary-accent text-primary border-outline-accent hover:bg-surface-secondary-accent hover:border-outline-accent-hover',
        surface:
          'bg-surface-primary text-primary border-outline hover:bg-surface-secondary hover:border-outline-hover'
      }
    },
    defaultVariants: {
      shape: 'default',
      color: 'accent'
    }
  }
)
