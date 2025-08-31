import type React from 'react'

import { cn } from '@/utils/cn'

import { Checkbox as HeadlessCheckbox } from '@headlessui/react'
import { Check } from 'lucide-react'

import type { CheckboxProps } from '@/components/checkbox/types'

export const Checkbox: React.FC<CheckboxProps> = ({
  className,
  checked = false,
  onChange = () => {},
  ...props
}: CheckboxProps): Children => {
  return (
    <HeadlessCheckbox
      {...props}
      checked={checked}
      onChange={onChange}
      className={({ checked }) =>
        cn(
          'size-8 flex items-center justify-center bg-surface-secondary hover:bg-surface-tertiary relative transition-all duration-150 border border-outline rounded-full p-1',
          checked &&
            'bg-surface-primary-accent hover:bg-surface-secondary-accent border-outline-accent hover:border-outline-accent-hover',
          className
        )
      }
    >
      {({ checked }) => (
        <Check
          className={cn(
            'size-4 text-gray-50 transition-all duration-150 opacity-0 invisible',
            checked && 'opacity-100 visible'
          )}
        />
      )}
    </HeadlessCheckbox>
  )
}
