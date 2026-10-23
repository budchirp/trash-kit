'use client'

import type React from 'react'

import { MenuItems } from '@headlessui/react'
import { cn } from '@/lib/cn'

import type { MenuContentProps } from '@/components/menu/types'

export const MenuContent: React.FC<MenuContentProps> = ({
  children,
  className
}: MenuContentProps): React.ReactNode => {
  return (
    <MenuItems
      transition
      anchor='bottom start'
      className={cn(
        'z-50 min-w-48 rounded-2xl border border-outline bg-surface-primary p-1 text-content-primary shadow-xl outline-none transition duration-150 data-closed:opacity-0 data-enter:opacity-100 data-leave:opacity-0',
        className
      )}
    >
      {children}
    </MenuItems>
  )
}
