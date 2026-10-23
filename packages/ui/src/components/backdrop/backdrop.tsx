'use client'

import type React from 'react'

import { Transition } from '@headlessui/react'
import { cn } from '@/lib/cn'

import { backdropStyle } from '@/components/backdrop/backdrop.style'

import type { BackdropProps } from '@/components/backdrop/types'

export const Backdrop: React.FC<BackdropProps> = ({
  open,
  onClose,
  children,
  className,
  onClick,
  ...props
}: BackdropProps): React.ReactNode => {
  return (
    <Transition
      {...props}
      show={open}
      as='div'
      onClick={(event) => {
        onClick?.(event)
        onClose?.()
      }}
      appear
      className={cn(backdropStyle(), className)}
    >
      {children}
    </Transition>
  )
}
