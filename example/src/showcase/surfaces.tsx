import type React from 'react'

import { Box, BoxContent, Column, Grid, Heading, Row, Text, toast } from '@trash-kit/ui'

import { Demo, DemoGrid, ShowcaseSection } from './demo'

const colors = ['primary', 'secondary', 'accent', 'danger', 'success', 'warning'] as const

export const Surfaces: React.FC = (): React.ReactNode => {
  return (
    <ShowcaseSection id='surfaces' title='Surfaces'>
      <DemoGrid>
        <Demo title='Box colors' className='md:col-span-2'>
          <Grid className='gap-3 md:grid-cols-3'>
            {colors.map((color) => (
              <Box key={color} color={color}>
                <BoxContent>
                  <Text className='font-medium capitalize'>{color}</Text>
                  <Text className='text-sm opacity-70'>Surface</Text>
                </BoxContent>
              </Box>
            ))}
          </Grid>
        </Demo>

        <Demo title='Clickable'>
          <Box color='primary' clickable onClick={() => toast('Project opened')}>
            <BoxContent className='flex-row items-center justify-between gap-3'>
              <Column className='gap-0.5'>
                <Heading size='h4'>Open project</Heading>
                <Text className='text-sm text-content-tertiary'>Hover for feedback.</Text>
              </Column>

              <Text className='text-xl text-content-tertiary'>→</Text>
            </BoxContent>
          </Box>
        </Demo>

        <Demo title='Disabled'>
          <Box color='secondary' disabled>
            <BoxContent className='flex-row items-center justify-between gap-3'>
              <Column className='gap-0.5'>
                <Heading size='h4'>Archived project</Heading>
                <Text className='text-sm text-content-tertiary'>Read only.</Text>
              </Column>

              <Text className='text-xl text-content-tertiary'>×</Text>
            </BoxContent>
          </Box>
        </Demo>

        <Demo title='Content padding' className='md:col-span-2'>
          <Row className='flex-wrap items-start gap-3'>
            {(['sm', 'md', 'lg'] as const).map((padding) => (
              <Box key={padding} color='secondary' className='flex-1'>
                <BoxContent padding={padding}>
                  <Text className='text-sm'>
                    <span className='font-medium capitalize'>{padding}</span> padding
                  </Text>
                </BoxContent>
              </Box>
            ))}
          </Row>
        </Demo>
      </DemoGrid>
    </ShowcaseSection>
  )
}
