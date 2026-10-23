import type React from 'react'

import { cn } from '@/lib/cn'

import { progressBarStyle, progressStyle } from '@/components/progress/progress.style'

import type { ProgressProps } from '@/components/progress/types'

export const Progress: React.FC<ProgressProps> = ({
  className,
  barClassName,
  value = 0,
  max = 100,
  size,
  color,
  label,
  showValue = false,
  indeterminate = false,
  ...props
}: ProgressProps): React.ReactNode => {
  const resolvedMax = Math.max(max, 0)
  const currentValue = Math.min(Math.max(value, 0), resolvedMax)
  const percentage = resolvedMax > 0 ? (currentValue / resolvedMax) * 100 : 0

  return (
    <div {...props} className={cn('flex w-full flex-col gap-2', className)}>
      {(label || showValue) && (
        <div className='flex items-center justify-between gap-3 text-sm'>
          {label && <span>{label}</span>}
          {showValue && <span className='text-content-tertiary'>{Math.round(percentage)}%</span>}
        </div>
      )}

      <div
        role='progressbar'
        aria-valuemin={0}
        aria-valuemax={resolvedMax}
        aria-valuenow={indeterminate ? undefined : currentValue}
        className={cn(
          'w-full overflow-hidden rounded-full bg-surface-secondary',
          progressStyle({ size })
        )}
      >
        <div
          className={cn(
            progressBarStyle({ color }),
            indeterminate ? 'w-1/2 animate-pulse' : '',
            barClassName
          )}
          style={indeterminate ? undefined : { width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
