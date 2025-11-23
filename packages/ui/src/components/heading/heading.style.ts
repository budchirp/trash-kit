import { cva } from 'class-variance-authority'

export const headingStyle = cva('break-all', {
  variants: {
    size: {
      h1: 'text-4xl font-bold',
      h2: 'text-2xl font-bold',
      h3: 'text-lg font-semibold',
      h4: 'text-md font-medium',
      h5: 'text-base font-normal text-secondary',
      h6: 'text-sm font-normal text-tertiary'
    },
    color: {
      accent: 'text-primary-accent',
      surface: 'text-primary'
    }
  },
  defaultVariants: {
    size: 'h2',
    color: 'surface'
  }
})
