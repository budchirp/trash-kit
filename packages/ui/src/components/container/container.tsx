import type React from 'react'

import { cn } from '@/utils/cn'

import type { ContainerProps } from '@/components/container/types'

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  ...props
}: ContainerProps): Children => {
  return (
    <div
      {...props}
      className={cn(
        'md:max-w-(--breakpoint-md) lg:px-8 lg:max-w-(--breakpoint-lg) mx-auto w-11/12 px-2',
        className
      )}
    >
      {children}
    </div>
  )
}
