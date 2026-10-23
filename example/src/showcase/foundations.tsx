import type React from 'react'

import { Column, Divider, Heading, IconBox, Row, Tag, Text } from '@trash-kit/ui'

import { Demo, DemoGrid, ShowcaseSection } from './demo'

const colors = ['primary', 'secondary', 'accent', 'danger', 'success', 'warning'] as const

export const Foundations: React.FC = (): React.ReactNode => {
  return (
    <ShowcaseSection id='foundations' title='Foundations'>
      <DemoGrid>
        <Demo title='Typography' className='md:col-span-2'>
          <Column className='gap-0.5'>
            <Heading size='h1'>Heading 1</Heading>
            <Heading size='h2'>Heading 2</Heading>
            <Heading size='h3'>Heading 3</Heading>
            <Heading size='h4'>Heading 4</Heading>
            <Heading size='h5'>Heading 5</Heading>
            <Heading size='h6'>Heading 6</Heading>
          </Column>

          <Text className='text-content-tertiary'>
            Body text for supporting copy and descriptions.
          </Text>
        </Demo>

        <Demo title='Tags'>
          <Row className='flex-wrap gap-2'>
            {colors.map((color) => (
              <Tag key={color} color={color}>
                {color}
              </Tag>
            ))}
          </Row>

          <Row className='flex-wrap gap-2'>
            <Tag clickable color='primary'>
              Clickable
            </Tag>
            <Tag color='secondary' disabled>
              Disabled
            </Tag>
          </Row>
        </Demo>

        <Demo title='Icon boxes'>
          <Row className='flex-wrap gap-3'>
            {colors.map((color) => (
              <IconBox key={color} color={color}>
                {color.charAt(0).toUpperCase()}
              </IconBox>
            ))}
          </Row>

          <Row className='flex-wrap items-center gap-3'>
            <IconBox size='sm' color='accent'>
              !
            </IconBox>
            <IconBox color='accent'>i</IconBox>
            <IconBox size='lg' color='accent'>
              ★
            </IconBox>
          </Row>
        </Demo>

        <Demo title='Dividers' className='md:col-span-2'>
          <Column className='gap-4'>
            <Divider />
            <Divider thickness='thick' />

            <Row className='h-8 items-center gap-3'>
              <Text className='text-sm text-content-tertiary'>Vertical</Text>
              <Divider orientation='vertical' />
              <Text className='text-sm text-content-tertiary'>Divider</Text>
            </Row>
          </Column>
        </Demo>
      </DemoGrid>
    </ShowcaseSection>
  )
}
