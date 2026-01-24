import { cva } from 'class-variance-authority'

export const boxStyle = cva(
  'w-full border relative overflow-hidden transition-all duration-300 rounded-3xl',
  {
    variants: {
      color: {
        primary: 'bg-surface-primary text-primary border-outline',
        secondary: 'bg-surface-secondary text-primary border-outline',
        accent: 'bg-surface-accent text-accent border-outline-accent'
      },
      clickable: {
        true: 'cursor-pointer active:scale-99',
        false: 'cursor-default'
      }
    },
    compoundVariants: [
      {
        clickable: true,
        color: 'primary',
        className: 'hover:bg-surface-secondary hover:border-outline-hover'
      },
      {
        clickable: true,
        color: 'secondary',
        className: 'hover:bg-surface-tertiary hover:border-outline-hover'
      },
      {
        clickable: true,
        color: 'accent',
        className: 'hover:bg-surface-accent-hover hover:border-outline-accent-hover'
      }
    ],
    defaultVariants: {
      color: 'primary',
      clickable: false
    }
  }
)
