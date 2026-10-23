'use client'

import type React from 'react'

import { cn } from '@/lib/cn'

import { useTabsContext } from '@/components/tabs/context'

import type { TabsTriggerProps } from '@/components/tabs/types'

export const TabsTrigger: React.FC<TabsTriggerProps> = ({
  children,
  className,
  value,
  disabled,
  ...props
}: TabsTriggerProps): React.ReactNode => {
  const tabs = useTabsContext()
  const isActive = tabs.value === value

  return (
    <button
      {...props}
      type='button'
      role='tab'
      id={`${tabs.baseId}-tab-${value}`}
      aria-controls={`${tabs.baseId}-panel-${value}`}
      aria-selected={isActive}
      disabled={disabled}
      onClick={() => tabs.setValue(value)}
      className={cn(
        '-mb-px cursor-pointer border-b-2 px-3 py-2 text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50',
        isActive
          ? 'border-accent text-content-primary'
          : 'border-transparent text-content-tertiary hover:text-content-primary',
        className
      )}
    >
      {children}
    </button>
  )
}
