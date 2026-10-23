import type React from 'react'

import { Column } from '@/components/column'
import { cn } from '@/lib/cn'

import type { DialogContentProps } from '@/components/dialog/types'

export const DialogContent: React.FC<DialogContentProps> = ({
  className,
  ...props
}: DialogContentProps): React.ReactNode => {
  return <Column {...props} className={cn('gap-4 p-6', className)} />
}
