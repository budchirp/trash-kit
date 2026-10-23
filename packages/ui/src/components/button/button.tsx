import type React from 'react'

import { buttonStyle } from '@/components/button/button.style'
import { Spinner } from '@/components/spinner'
import { cn } from '@/lib/cn'

import type { ButtonProps } from '@/components/button/types'

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  shape,
  color,
  disabled,
  loading = false,
  type = 'button',
  ...props
}: ButtonProps): React.ReactNode => {
  return (
    <button
      {...props}
      type={type}
      disabled={loading || disabled}
      aria-busy={loading || undefined}
      className={cn(buttonStyle({ className, shape, color }))}
    >
      {loading && <Spinner size='sm' />}

      {children}
    </button>
  )
}
