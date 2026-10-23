import { cva } from 'class-variance-authority'

export const boxContentStyle = cva('w-full gap-2 transition-all duration-300', {
  variants: {
    padding: {
      none: 'p-0',
      sm: 'p-2',
      md: 'px-4 py-3',
      lg: 'p-6'
    }
  },
  defaultVariants: {
    padding: 'md'
  }
})
