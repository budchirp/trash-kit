import { cva } from 'class-variance-authority'

export const columnStyle = cva('flex flex-col w-full gap-4', {
  variants: {
    padding: {
      none: 'p-0',
      sm: 'py-2',
      md: 'py-4',
      lg: 'py-8'
    }
  },
  defaultVariants: {
    padding: 'none'
  }
})
