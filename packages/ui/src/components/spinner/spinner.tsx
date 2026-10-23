import type React from 'react'

import { LoaderCircle } from 'lucide-react'
import { cn } from '@/lib/cn'

import { spinnerStyle } from '@/components/spinner/spinner.style'

import type { SpinnerProps } from '@/components/spinner/types'

export const Spinner: React.FC<SpinnerProps> = ({
  className,
  size,
  label = 'Loading',
  ...props
}: SpinnerProps): React.ReactNode => {
  return (
    <LoaderCircle
      {...props}
      role='status'
      aria-label={label}
      className={cn(spinnerStyle({ size, className }))}
    />
  )
}
