import type React from 'react'

import { Avatar, AvatarGroup, Box, BoxContent, Column, Row, Tag, Text } from '@trash-kit/ui'

import type { AvatarStatus } from '@trash-kit/ui'

import { Demo, DemoGrid, ShowcaseSection } from './demo'

type Person = {
  name: string
  role: string
  status: AvatarStatus
}

const people: Person[] = [
  { name: 'Ada Lovelace', role: 'Engineering', status: 'online' },
  { name: 'Grace Hopper', role: 'Design', status: 'busy' },
  { name: 'Alan Turing', role: 'Research', status: 'away' },
  { name: 'Katherine Johnson', role: 'Data', status: 'offline' }
]

export const Data: React.FC = (): React.ReactNode => {
  return (
    <ShowcaseSection id='data' title='Data display'>
      <DemoGrid>
        <Demo title='Avatar sizes'>
          <Row className='flex-wrap items-end gap-4'>
            <Avatar name='Ada Lovelace' size='sm' status='online' />
            <Avatar name='Grace Hopper' status='busy' />
            <Avatar name='Alan Turing' size='lg' status='away' />
            <Avatar name='Katherine Johnson' size='xl' status='offline' />
          </Row>
        </Demo>

        <Demo title='Avatar group'>
          <AvatarGroup max={3}>
            <Avatar name='Ada Lovelace' />
            <Avatar name='Grace Hopper' />
            <Avatar name='Alan Turing' />
            <Avatar name='Katherine Johnson' />
          </AvatarGroup>

          <AvatarGroup size='lg' max={4}>
            <Avatar name='Ada Lovelace' status='online' />
            <Avatar name='Grace Hopper' status='busy' />
            <Avatar name='Alan Turing' status='away' />
            <Avatar name='Katherine Johnson' status='offline' />
          </AvatarGroup>
        </Demo>

        <Demo title='People' className='md:col-span-2'>
          <Box color='primary'>
            <BoxContent padding='none' className='divide-y divide-outline'>
              {people.map((person) => (
                <Row key={person.name} className='justify-between gap-4 p-3'>
                  <Row className='gap-3'>
                    <Avatar name={person.name} size='sm' status={person.status} />

                    <Column className='gap-0'>
                      <Text className='text-sm font-medium'>{person.name}</Text>
                      <Text className='text-xs text-content-tertiary'>{person.role}</Text>
                    </Column>
                  </Row>

                  <Tag color={person.status === 'online' ? 'success' : 'secondary'}>
                    {person.status}
                  </Tag>
                </Row>
              ))}
            </BoxContent>
          </Box>
        </Demo>
      </DemoGrid>
    </ShowcaseSection>
  )
}
