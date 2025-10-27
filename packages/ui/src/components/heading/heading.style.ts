import { cva } from 'class-variance-authority'

export const headingStyle = cva('break-all', {
  variants: {
    size: {
      h1: 'text-4xl font-bold',
      h2: 'text-2xl font-bold',
      h3: 'text-lg font-semibold text-secondary',
      h4: 'text-base font-medium text-tertiary'
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
