import { cva } from 'class-variance-authority'

export const buttonStyle = cva(
  'flex items-center justify-center rounded-full cursor-pointer w-fit font-medium transition-all duration-300 border active:scale-95 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      shape: {
        default: 'px-4 py-1',
        circle: 'p-2 aspect-square'
      },
      color: {
        accent:
          'bg-surface-accent hover:bg-surface-accent-hover text-accent border-outline-accent hover:border-outline-accent-hover',
        primary:
          'bg-surface-primary hover:bg-surface-secondary text-primary border-outline hover:border-outline-hover',
        secondary:
          'bg-surface-secondary hover:bg-surface-tertiary text-primary border-outline hover:border-outline-hover',
        danger: 'bg-red-600 hover:bg-red-700 text-red-50 border-red-500 hover:border-red-600'
      }
    },
    defaultVariants: {
      shape: 'default',
      color: 'accent'
    }
  }
)
