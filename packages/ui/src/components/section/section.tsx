import type React from 'react'

import { cn } from '@/utils/cn'

import { Column } from '@/components/column'
import { Heading } from '@/components/heading'

import type { SectionProps } from '@/components/section/types'
import { Divider } from '../divider'

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  title,
  description,
  subsection = false,
  divider = !subsection,
  ...props
}: SectionProps): Children => {
  return (
    <Column
      {...props}
      padding='none'
      className={cn('gap-0', !subsection ? 'mt-12' : '', className)}
    >
      <Column className='mb-2 gap-2'>
        {typeof title === 'string' ? (
          <Heading size={subsection ? 'h3' : 'h1'}>{title}</Heading>
        ) : (
          title
        )}

        {description && (
          <div>
            {typeof description === 'string' ? (
              <Heading size='h4'>{description}</Heading>
            ) : (
              description
            )}
          </div>
        )}
      </Column>

      {divider && <Divider thickness='thick' className='mb-2' />}

      <Column className={!subsection ? 'mt-2' : ''} padding='none'>
        {children}
      </Column>
    </Column>
  )
}
