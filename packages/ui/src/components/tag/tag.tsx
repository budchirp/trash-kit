import type React from 'react'

import { boxStyle } from '@/components/box/box.style'
import { cn } from '@/lib/cn'

import type { TagProps } from '@/components/tag/types'

export const Tag: React.FC<TagProps> = ({
  children,
  className,
  color,
  clickable,
  disabled,
  as,
  ...props
}: TagProps): React.ReactNode => {
  const Component = (as ?? 'span') as React.ElementType

  return (
    <Component
      {...props}
      className={cn(
        boxStyle({
          color,
          clickable,
          disabled,
          className: cn('inline-flex items-center px-3 py-1 w-fit rounded-xl', className)
        })
      )}
    >
      {children}
    </Component>
  )
}
