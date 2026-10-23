import { cva } from 'class-variance-authority'

export const backdropStyle = cva(
  'fixed inset-0 z-40 h-screen w-screen bg-surface-primary/50 backdrop-blur-sm transition-all data-closed:opacity-0 data-closed:backdrop-blur-none data-enter:ease-out data-enter:duration-300 data-leave:ease-in data-leave:duration-200'
)
