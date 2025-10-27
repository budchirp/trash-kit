import { cva } from 'class-variance-authority'

export const boxContentStyle = cva('w-full gap-2', {
  variants: {
    padding: {
      none: 'p-0',
      default: 'px-4 py-3',
      md: 'p-4',
      sm: 'p-2'
    }
  },
  defaultVariants: {
    padding: 'default'
  }
})
