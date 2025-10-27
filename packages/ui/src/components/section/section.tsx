import type React from 'react'

import { cn } from '@/lib/cn'

import { Column } from '@/components/column'
import { Heading } from '@/components/heading'
import { Divider } from '@/components/divider'

import type { SectionProps } from '@/components/section/types'

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  title,
  description,
  subsection = false,
  divider = !subsection && !!title,
  columnClassName,
  ...props
}: SectionProps): Children => {
  return (
    <Column
      {...props}
      padding='none'
      className={cn('gap-0', !subsection && (title || description) ? 'mt-12' : '', className)}
    >
      <Column className='mb-2 gap-2'>
        {title && typeof title === 'string' ? (
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

      {divider && title && <Divider thickness='thick' className='mb-2' />}

      <Column
        className={cn(!subsection ? 'mt-2' : '', columnClassName)}
        padding={!divider && !(title || description) ? 'lg' : 'none'}
      >
        {children}
      </Column>
    </Column>
  )
}
