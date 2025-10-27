import type React from 'react'

import { cn } from '@/lib/cn'

import type { TextProps } from '@/components/text/types'

export const Text: React.FC<TextProps> = ({
  children,
  className,
  ...props
}: TextProps): Children => {
  return (
    <p {...props} className={cn('break-words', className)}>
      {children}
    </p>
  )
}
