'use client'

import type React from 'react'

import { MenuButton } from '@headlessui/react'
import { cn } from '@/lib/cn'

import type { MenuTriggerProps } from '@/components/menu/types'

export const MenuTrigger: React.FC<MenuTriggerProps> = ({
  className,
  type = 'button',
  ...props
}: MenuTriggerProps): React.ReactNode => {
  return (
    <MenuButton
      {...props}
      type={type}
      className={cn(
        'flex w-fit cursor-pointer items-center gap-2 rounded-full border border-outline bg-surface-secondary px-4 py-1 text-sm font-medium text-content-primary transition-colors hover:bg-surface-tertiary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50',
        className
      )}
    />
  )
}
