import type React from 'react'

import { cn } from '@/lib/cn'

import type { SkeletonProps } from '@/components/skeleton/types'

export const Skeleton: React.FC<SkeletonProps> = ({
  className,
  ...props
}: SkeletonProps): React.ReactNode => {
  return (
    <div {...props} className={cn('animate-pulse rounded-xl bg-surface-secondary', className)} />
  )
}
