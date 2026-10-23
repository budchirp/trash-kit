import type React from 'react'

import { cn } from '@/lib/cn'

import { iconBoxStyle } from '@/components/icon-box/icon-box.style'

import type { IconBoxProps } from '@/components/icon-box/types'

export const IconBox: React.FC<IconBoxProps> = ({
  children,
  className,
  color,
  size,
  ...props
}: IconBoxProps): React.ReactNode => {
  return (
    <div {...props} className={cn(iconBoxStyle({ color, size, className }))}>
      {children}
    </div>
  )
}
