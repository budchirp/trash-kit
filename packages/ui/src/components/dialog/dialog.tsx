'use client'

import type React from 'react'

import { Dialog as HeadlessDialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { cn } from '@/lib/cn'

import { backdropStyle } from '@/components/backdrop/backdrop.style'
import { dialogStyle } from '@/components/dialog/dialog.style'

import type { DialogProps } from '@/components/dialog/types'

export const Dialog: React.FC<DialogProps> = ({
  open,
  onClose,
  children,
  className,
  backdropClassName,
  size,
  role = 'dialog',
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  'aria-describedby': ariaDescribedBy
}: DialogProps): React.ReactNode => {
  return (
    <HeadlessDialog
      open={open}
      onClose={onClose}
      role={role}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      className='relative z-50'
    >
      <DialogBackdrop transition className={cn(backdropStyle(), backdropClassName)} />

      <div className='fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4'>
        <DialogPanel transition className={cn(dialogStyle({ size, className }))}>
          {children}
        </DialogPanel>
      </div>
    </HeadlessDialog>
  )
}
