'use client'

import type React from 'react'
import { useId, useState } from 'react'

import { cn } from '@/lib/cn'

import { TabsProvider } from '@/components/tabs/context'

import type { TabsProps } from '@/components/tabs/types'

export const Tabs: React.FC<TabsProps> = ({
  children,
  className,
  value,
  defaultValue,
  onValueChange,
  ...props
}: TabsProps): React.ReactNode => {
  const [internalValue, setInternalValue] = useState(defaultValue)
  const baseId = useId()
  const selectedValue = value ?? internalValue

  const setValue = (nextValue: string) => {
    if (value === undefined) {
      setInternalValue(nextValue)
    }

    onValueChange?.(nextValue)
  }

  return (
    <TabsProvider value={{ value: selectedValue, baseId, setValue }}>
      <div {...props} className={cn('flex w-full flex-col gap-4', className)}>
        {children}
      </div>
    </TabsProvider>
  )
}
