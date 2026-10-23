import type React from 'react'
import { useState } from 'react'

import { Alert, Button, Column, Grid, Progress, Row, Skeleton } from '@trash-kit/ui'

import { Demo, DemoGrid, ShowcaseSection } from './demo'

const alerts = [
  { color: 'primary', title: 'Note', icon: 'i' },
  { color: 'secondary', title: 'Draft saved', icon: '•' },
  { color: 'accent', title: 'New version available', icon: '↑' },
  { color: 'danger', title: 'Upload failed', icon: '×' },
  { color: 'success', title: 'Changes saved', icon: '✓' },
  { color: 'warning', title: 'Storage almost full', icon: '!' }
] as const

export const Feedback: React.FC = (): React.ReactNode => {
  const [showWarning, setShowWarning] = useState(true)

  return (
    <ShowcaseSection id='feedback' title='Feedback'>
      <DemoGrid>
        <Demo title='Alerts' className='md:col-span-2'>
          <Grid className='gap-3 md:grid-cols-2'>
            {alerts.map((alert) => (
              <Alert key={alert.color} color={alert.color} title={alert.title} icon={alert.icon} />
            ))}
          </Grid>
        </Demo>

        <Demo title='Dismissible' className='md:col-span-2'>
          {showWarning ? (
            <Alert
              color='warning'
              title='Storage almost full'
              description='Free up space to keep syncing.'
              icon='!'
              onClose={() => setShowWarning(false)}
            />
          ) : (
            <Button color='secondary' className='w-fit' onClick={() => setShowWarning(true)}>
              Show warning
            </Button>
          )}
        </Demo>

        <Demo title='Progress'>
          <Column className='gap-4'>
            <Progress value={35} label='Upload' showValue />
            <Progress value={65} color='primary' label='Storage' showValue />
            <Progress value={50} color='secondary' size='lg' label='Secondary' showValue />
            <Progress indeterminate label='Syncing' />
          </Column>
        </Demo>

        <Demo title='Skeleton'>
          <Column className='gap-4'>
            <Row className='items-center gap-3'>
              <Skeleton className='size-10 shrink-0 rounded-full' />

              <Column className='gap-2'>
                <Skeleton className='h-3 w-36' />
                <Skeleton className='h-3 w-24' />
              </Column>
            </Row>

            <Skeleton className='h-24 w-full rounded-2xl' />
          </Column>
        </Demo>
      </DemoGrid>
    </ShowcaseSection>
  )
}
