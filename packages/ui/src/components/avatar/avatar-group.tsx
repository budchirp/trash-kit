import type React from 'react'
import { Children } from 'react'

import { cn } from '@/lib/cn'

import { avatarStyle } from '@/components/avatar/avatar.style'

import type { AvatarGroupProps } from '@/components/avatar/types'

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  children,
  className,
  size,
  max,
  ...props
}: AvatarGroupProps): React.ReactNode => {
  const items = Children.toArray(children)
  const visible = typeof max === 'number' ? items.slice(0, max) : items

  return (
    <div {...props} className={cn('flex items-center -space-x-2', className)}>
      {visible.map((child, index) => (
        <div key={index} className='rounded-full ring-2 ring-surface-primary'>
          {child}
        </div>
      ))}

      {typeof max === 'number' && items.length > max && (
        <span
          className={cn(
            avatarStyle({ size }),
            'bg-surface-tertiary text-xs ring-2 ring-surface-primary'
          )}
        >
          +{items.length - max}
        </span>
      )}
    </div>
  )
}
