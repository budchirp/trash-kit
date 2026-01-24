import type React from 'react'

import { boxStyle } from '@/components/box/box.style'
import { cn } from '@/lib/cn'

import type { TagProps } from '@/components/tag/types'

export const Tag: React.FC<TagProps> = ({
  children,
  className,
  color,
  clickable,
  ...props
}: TagProps): Children => {
  return (
    <div
      {...props}
      className={cn(
        boxStyle({
          color,
          clickable,
          className: cn('px-3 py-1 w-fit text-sm font-medium rounded-xl', className)
        })
      )}
    >
      {children}
    </div>
  )
}
