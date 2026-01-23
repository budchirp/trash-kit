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
      className={cn('gap-2', !subsection && (title || description) ? 'mt-12' : '', className)}
    >
      {(title || description) && (
        <Column className='gap-1'>
          {title && (
            <div>
              {typeof title === 'string' ? (
                <Heading size={subsection ? 'h3' : 'h1'}>{title}</Heading>
              ) : (
                title
              )}
            </div>
          )}

          {description && (
            <div>
              {typeof description === 'string' ? (
                <Heading className='text-tertiary' size='h3'>
                  {description}
                </Heading>
              ) : (
                description
              )}
            </div>
          )}
        </Column>
      )}

      {divider && <Divider thickness='thick' />}

      <Column
        className={cn(!subsection && (title || description) ? 'mt-2' : '', columnClassName)}
        padding={!divider && !(title || description) ? 'lg' : 'none'}
      >
        {children}
      </Column>
    </Column>
  )
}
