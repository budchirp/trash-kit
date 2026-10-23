import type React from 'react'

import { cn } from '@/lib/cn'

import { Heading } from '@/components/heading'
import { Divider } from '@/components/divider'
import { Column } from '@/components/column'
import { Text } from '@/components/text'

import type { SectionProps } from '@/components/section/types'

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  title,
  description,
  subsection = false,
  divider = !subsection && !!title,
  contentClassName,
  ...props
}: SectionProps): React.ReactNode => {
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
            <div>{typeof description === 'string' ? <Text>{description}</Text> : description}</div>
          )}
        </Column>
      )}

      {divider && <Divider thickness='thick' />}

      <Column
        className={cn(!subsection && (title || description) ? 'mt-2' : '', contentClassName)}
        padding={!divider && !(title || description) ? 'lg' : 'none'}
      >
        {children}
      </Column>
    </Column>
  )
}
