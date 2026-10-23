import type { ComponentProps, ReactNode } from 'react'

import type { VariantProps } from 'class-variance-authority'

import type { avatarStatusStyle, avatarStyle } from '@/components/avatar/avatar.style'

export type AvatarStatus = NonNullable<VariantProps<typeof avatarStatusStyle>['status']>

export type AvatarProps = ComponentProps<'div'> &
  Pick<VariantProps<typeof avatarStyle>, 'size'> & {
    src?: string
    alt?: string
    name?: string
    status?: AvatarStatus
    fallback?: ReactNode
  }

export type AvatarGroupProps = ComponentProps<'div'> &
  Pick<VariantProps<typeof avatarStyle>, 'size'> & {
    max?: number
  }
