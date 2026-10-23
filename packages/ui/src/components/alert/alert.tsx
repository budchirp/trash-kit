'use client'

import type React from 'react'

import { X } from 'lucide-react'
import { cn } from '@/lib/cn'

import { alertStyle } from '@/components/alert/alert.style'
import { IconBox } from '@/components/icon-box'

import type { AlertProps } from '@/components/alert/types'

export const Alert: React.FC<AlertProps> = ({
  className,
  color,
  title,
  description,
  icon,
  action,
  onClose,
  children,
  ...props
}: AlertProps): React.ReactNode => {
  return (
    <div {...props} role='alert' className={cn(alertStyle({ color, className }))}>
      {icon && (
        <IconBox color={color ?? 'accent'} size='sm'>
          {icon}
        </IconBox>
      )}

      <div className='flex min-w-0 flex-1 flex-col gap-1'>
        {title && <div className='font-semibold'>{title}</div>}
        {description && <div className='opacity-90'>{description}</div>}
        {children}
        {action && <div className='pt-2'>{action}</div>}
      </div>

      {onClose && (
        <button
          type='button'
          aria-label='Dismiss'
          onClick={onClose}
          className='shrink-0 rounded-full p-1 transition-opacity hover:opacity-70'
        >
          <X className='size-4' />
        </button>
      )}
    </div>
  )
}
