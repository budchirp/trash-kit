import type React from 'react'

import { Column, Container, Heading, Row, Tag, Text } from '@trash-kit/ui'

import { Actions } from './showcase/actions'
import { Data } from './showcase/data'
import { Feedback } from './showcase/feedback'
import { Forms } from './showcase/forms'
import { Foundations } from './showcase/foundations'
import { Navigation } from './showcase/navigation'
import { Overlays } from './showcase/overlays'
import { Surfaces } from './showcase/surfaces'

const sections = [
  { id: 'foundations', label: 'Foundations' },
  { id: 'surfaces', label: 'Surfaces' },
  { id: 'actions', label: 'Actions' },
  { id: 'forms', label: 'Forms' },
  { id: 'overlays', label: 'Overlays' },
  { id: 'navigation', label: 'Navigation' },
  { id: 'feedback', label: 'Feedback' },
  { id: 'data', label: 'Data display' }
]

export const App: React.FC = (): React.ReactNode => {
  return (
    <main className='min-h-screen bg-surface-secondary pb-24'>
      <header className='border-b border-outline bg-surface-primary'>
        <Container className='py-12'>
          <Column className='gap-5'>
            <Row className='flex-wrap gap-2'>
              <Tag color='accent'>@trash-kit/ui</Tag>
            </Row>

            <Heading size='h1'>Component showcase</Heading>
          </Column>
        </Container>
      </header>

      <Container className='flex gap-10 py-10'>
        <aside className='sticky top-6 hidden w-44 shrink-0 self-start lg:block'>
          <Column className='gap-0.5'>
            <Text className='mb-2 text-xs font-semibold text-content-tertiary uppercase tracking-wider'>
              Sections
            </Text>

            {sections.map((section, index) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className='group flex items-center gap-2 rounded-lg px-2 py-1 text-sm text-content-tertiary transition-colors hover:bg-surface-primary hover:text-content-primary'
              >
                <span className='font-mono text-[10px] text-content-tertiary/60 transition-colors group-hover:text-content-tertiary'>
                  {String(index + 1).padStart(2, '0')}
                </span>
                {section.label}
              </a>
            ))}
          </Column>
        </aside>

        <Column className='min-w-0 flex-1 gap-16'>
          <Foundations />
          <Surfaces />
          <Actions />
          <Forms />
          <Overlays />
          <Navigation />
          <Feedback />
          <Data />
        </Column>
      </Container>
    </main>
  )
}
