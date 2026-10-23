'use client'

import type React from 'react'
import { useState } from 'react'

import { User } from 'lucide-react'
import { cn } from '@/lib/cn'

import { avatarStatusStyle, avatarStyle } from '@/components/avatar/avatar.style'

import type { AvatarProps } from '@/components/avatar/types'

const getInitials = (name?: string): string => {
  if (!name) {
    return ''
  }

  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join('')
}

export const Avatar: React.FC<AvatarProps> = ({
  className,
  size,
  src,
  alt,
  name,
  status,
  fallback,
  ...props
}: AvatarProps): React.ReactNode => {
  const [failed, setFailed] = useState(false)
  const initials = getInitials(name)
  const showImage = Boolean(src) && !failed

  return (
    <div {...props} className={cn('relative inline-flex shrink-0', className)}>
      <div className={cn(avatarStyle({ size }))}>
        {showImage ? (
          <img
            src={src}
            alt={alt ?? name ?? ''}
            onError={() => setFailed(true)}
            className='size-full object-cover'
          />
        ) : (
          (fallback ?? (initials || <User className='size-1/2 opacity-60' />))
        )}
      </div>

      {status && <span className={cn(avatarStatusStyle({ status, size }))} />}
    </div>
  )
}
