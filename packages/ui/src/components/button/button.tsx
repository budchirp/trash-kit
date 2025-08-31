import type React from 'react'

import { buttonStyle } from '@/components/button/button.style'
import { cn } from '@/utils/cn'

import type { ButtonProps } from '@/components/button/types'
import { LoaderCircle } from 'lucide-react'

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  shape,
  color,
  disabled,
  loading = false,
  ...props
}: ButtonProps): Children => {
  return (
    <button
      {...props}
      disabled={loading || disabled}
      className={cn(buttonStyle({ className, shape, color }))}
    >
      {loading && <LoaderCircle className={cn('size-4 animate-spin', children && 'mr-2')} />}

      {children}
    </button>
  )
}
