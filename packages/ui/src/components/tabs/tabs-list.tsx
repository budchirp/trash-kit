'use client'

import type React from 'react'

import { cn } from '@/lib/cn'

import type { TabsListProps } from '@/components/tabs/types'

export const TabsList: React.FC<TabsListProps> = ({
  className,
  ...props
}: TabsListProps): React.ReactNode => {
  return (
    <div
      {...props}
      role='tablist'
      className={cn('flex items-center gap-1 border-b border-outline', className)}
    />
  )
}
