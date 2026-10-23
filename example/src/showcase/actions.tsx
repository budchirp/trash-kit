import type React from 'react'

import { Button, Row, Spinner } from '@trash-kit/ui'

import { Demo, DemoGrid, ShowcaseSection } from './demo'

const colors = ['primary', 'secondary', 'accent', 'danger', 'success', 'warning'] as const

export const Actions: React.FC = (): React.ReactNode => {
  return (
    <ShowcaseSection id='actions' title='Actions'>
      <DemoGrid>
        <Demo title='Colors' className='md:col-span-2'>
          <Row className='flex-wrap items-center gap-2'>
            {colors.map((color) => (
              <Button key={color} color={color} className='capitalize'>
                {color}
              </Button>
            ))}
          </Row>
        </Demo>

        <Demo title='Shapes'>
          <Row className='flex-wrap items-center gap-2'>
            <Button>Default</Button>
            <Button shape='circle' aria-label='Add'>
              +
            </Button>
            <Button color='secondary' shape='circle' aria-label='More'>
              ···
            </Button>
          </Row>
        </Demo>

        <Demo title='States'>
          <Row className='flex-wrap items-center gap-2'>
            <Button loading>Loading</Button>
            <Button disabled>Disabled</Button>
            <Button color='secondary' loading>
              Loading
            </Button>
          </Row>
        </Demo>

        <Demo title='Spinners' className='md:col-span-2'>
          <Row className='flex-wrap items-center gap-5'>
            <Spinner size='sm' />
            <Spinner />
            <Spinner size='lg' />
            <Spinner className='text-content-tertiary' />
            <Spinner className='text-accent' size='lg' />
          </Row>
        </Demo>
      </DemoGrid>
    </ShowcaseSection>
  )
}
