import { cva } from 'class-variance-authority'

export const dividerStyle = cva('bg-outline rounded-full', {
  variants: {
    thickness: {
      thin: '',
      thick: ''
    },
    orientation: {
      horizontal: 'w-full px-4',
      vertical: 'h-full'
    }
  },
  compoundVariants: [
    {
      orientation: 'horizontal',
      thickness: 'thin',
      className: 'h-[0.5px]'
    },
    {
      orientation: 'horizontal',
      thickness: 'thick',
      className: 'h-1'
    },
    {
      orientation: 'vertical',
      thickness: 'thin',
      className: 'w-[0.5px]'
    },
    {
      orientation: 'vertical',
      thickness: 'thick',
      className: 'w-1'
    }
  ],
  defaultVariants: {
    thickness: 'thin',
    orientation: 'horizontal'
  }
})
