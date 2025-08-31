import type React from 'react'

import { Transition } from '@headlessui/react'
import { cn } from '@/utils/cn'

import type { BackdropProps } from '@/components/backdrop/types'

export const Backdrop: React.FC<BackdropProps> = ({
  open,
  onClose
}: BackdropProps): React.ReactNode => (
  <Transition
    show={open}
    as='div'
    onClick={onClose}
    appear
    className={cn(
      'transition-all bg-surface-primary/50 backdrop-blur-sm h-screen inset-0 fixed z-10 w-screen',
      'data-closed:bg-opacity-0! data-closed:backdrop-blur-none',
      'data-enter:ease-out data-enter:duration-400',
      'data-leave:ease-in data-leave:duration-200'
    )}
  />
)
