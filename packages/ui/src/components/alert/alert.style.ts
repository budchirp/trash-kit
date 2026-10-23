import { cva } from 'class-variance-authority'

export const alertStyle = cva('flex w-full items-center gap-3 rounded-2xl border p-4 text-sm', {
  variants: {
    color: {
      primary: 'border-outline bg-surface-primary text-content-primary',
      secondary: 'border-outline bg-surface-secondary text-content-primary',
      accent: 'border-outline-accent bg-surface-accent text-surface-content-accent',
      danger: 'border-outline-danger bg-surface-danger text-surface-content-danger',
      success: 'border-outline-success bg-surface-success text-surface-content-success',
      warning: 'border-outline-warning bg-surface-warning text-surface-content-warning'
    }
  },
  defaultVariants: {
    color: 'accent'
  }
})
