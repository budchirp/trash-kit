import type React from 'react'

import { Column, Heading, Row, cn } from '@trash-kit/ui'

type ShowcaseSectionProps = {
  id: string
  title: string
  children: React.ReactNode
}

export const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({
  id,
  title,
  children
}: ShowcaseSectionProps): React.ReactNode => {
  return (
    <section id={id} className='scroll-mt-24'>
      <Column className='gap-5'>
        <Row className='gap-4'>
          <Heading size='h2'>{title}</Heading>
          <div className='h-px flex-1 bg-outline' />
        </Row>

        {children}
      </Column>
    </section>
  )
}

type DemoGridProps = {
  children: React.ReactNode
  className?: string
}

export const DemoGrid: React.FC<DemoGridProps> = ({
  children,
  className
}: DemoGridProps): React.ReactNode => {
  return <div className={cn('grid gap-4 md:grid-cols-2', className)}>{children}</div>
}

type DemoProps = {
  title: string
  children: React.ReactNode
  className?: string
  contentClassName?: string
}

export const Demo: React.FC<DemoProps> = ({
  title,
  children,
  className,
  contentClassName
}: DemoProps): React.ReactNode => {
  return (
    <Column className={cn('gap-2', className)}>
      <Heading
        as='h3'
        size='h6'
        className='font-semibold text-content-tertiary uppercase tracking-wider'
      >
        {title}
      </Heading>

      <div
        className={cn(
          'flex flex-1 flex-col justify-center gap-4 rounded-2xl border border-outline bg-surface-primary p-4',
          contentClassName
        )}
      >
        {children}
      </div>
    </Column>
  )
}
