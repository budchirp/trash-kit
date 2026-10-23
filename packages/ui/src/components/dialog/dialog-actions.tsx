import type React from 'react'

import { Row } from '@/components/row'
import { cn } from '@/lib/cn'

import type { DialogActionsProps } from '@/components/dialog/types'

export const DialogActions: React.FC<DialogActionsProps> = ({
  className,
  ...props
}: DialogActionsProps): React.ReactNode => {
  return (
    <Row
      {...props}
      className={cn('w-full justify-end gap-2 border-t border-outline p-4', className)}
    />
  )
}
