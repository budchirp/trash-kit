import type React from 'react'

import { tagStyle } from '@/components/tag/tag.style'
import { cn } from '@/lib/cn'

import type { TagProps } from '@/components/tag/types'

export const Tag: React.FC<TagProps> = ({
  children,
  className,
  color,
  ...props
}: TagProps): Children => {
  return (
    <div {...props} className={cn(tagStyle({ className, color }))}>
      {children}
    </div>
  )
}
