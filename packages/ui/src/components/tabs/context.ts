'use client'

import { createContext } from '@/hooks/create-context'

export type TabsContextValue = {
  value?: string
  baseId: string
  setValue: (value: string) => void
}

export const [TabsProvider, useTabsContext] = createContext<TabsContextValue>({
  name: 'Tabs'
})
