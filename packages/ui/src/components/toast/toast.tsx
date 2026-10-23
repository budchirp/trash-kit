'use client'

import type React from 'react'
import type { ReactNode } from 'react'

import { toast as sonnerToast } from 'sonner'
import { Box, BoxContent } from '@/components/box'
import { Button } from '@/components/button'
import { Column } from '@/components/column'

import type { Color } from '@/lib/variants'

export type ToastAction = {
  label: string
  onClick: () => void
}

export type ToastOptions = {
  description?: ReactNode
  color?: Color
  duration?: number
  action?: ToastAction
}

export const toast = (title: ReactNode, options: ToastOptions = {}) => {
  const { description, color = 'secondary', duration, action } = options

  return sonnerToast.custom(
    (): React.ReactElement => (
      <Box color={color} className='w-72 shadow-2xl md:w-lg'>
        <BoxContent className='gap-3'>
          <Column className='gap-1'>
            <div className='font-medium'>{title}</div>
            {description && <div className='text-sm opacity-80'>{description}</div>}
          </Column>

          {action && (
            <Button color='primary' onClick={action.onClick}>
              {action.label}
            </Button>
          )}
        </BoxContent>
      </Box>
    ),
    { duration }
  )
}
