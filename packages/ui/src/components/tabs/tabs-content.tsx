'use client'

import type React from 'react'

import { cn } from '@/lib/cn'

import { useTabsContext } from '@/components/tabs/context'

import type { TabsContentProps } from '@/components/tabs/types'

export const TabsContent: React.FC<TabsContentProps> = ({
  children,
  className,
  value,
  ...props
}: TabsContentProps): React.ReactNode => {
  const tabs = useTabsContext()

  if (tabs.value !== value) {
    return null
  }

  return (
    <div
      {...props}
      role='tabpanel'
      id={`${tabs.baseId}-panel-${value}`}
      aria-labelledby={`${tabs.baseId}-tab-${value}`}
      className={cn('outline-none', className)}
    >
      {children}
    </div>
  )
}
