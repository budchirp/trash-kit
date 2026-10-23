'use client'

import type React from 'react'

import { MenuItem as HeadlessMenuItem } from '@headlessui/react'
import { cn } from '@/lib/cn'

import type { MenuItemProps } from '@/components/menu/types'

export const MenuItem: React.FC<MenuItemProps> = ({
  className,
  children,
  ...props
}: MenuItemProps): React.ReactNode => {
  return (
    <HeadlessMenuItem
      as='button'
      type='button'
      {...props}
      className={({ focus }) =>
        cn(
          'flex w-full cursor-pointer items-center gap-2 rounded-xl px-3 py-2 text-left text-sm transition-colors',
          focus ? 'bg-surface-secondary' : '',
          className
        )
      }
    >
      {children}
    </HeadlessMenuItem>
  )
}
