import { cva } from 'class-variance-authority'

export const headingStyle = cva('text-pretty', {
  variants: {
    size: {
      h1: 'text-4xl font-bold',
      h2: 'text-2xl font-bold',
      h3: 'text-lg font-semibold',
      h4: 'text-base font-medium',
      h5: 'text-base font-normal',
      h6: 'text-sm font-normal'
    }
  },
  defaultVariants: {
    size: 'h2'
  }
})
