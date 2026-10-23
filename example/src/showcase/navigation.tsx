import type React from 'react'
import { useState } from 'react'

import {
  Accordion,
  Breadcrumb,
  Pagination,
  Row,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Tag,
  Text
} from '@trash-kit/ui'

import { Demo, DemoGrid, ShowcaseSection } from './demo'

export const Navigation: React.FC = (): React.ReactNode => {
  const [page, setPage] = useState(2)

  return (
    <ShowcaseSection id='navigation' title='Navigation'>
      <DemoGrid>
        <Demo title='Tabs' className='md:col-span-2'>
          <Tabs defaultValue='overview'>
            <TabsList>
              <TabsTrigger value='overview'>Overview</TabsTrigger>
              <TabsTrigger value='activity'>Activity</TabsTrigger>
              <TabsTrigger value='settings'>Settings</TabsTrigger>
              <TabsTrigger value='locked' disabled>
                Locked
              </TabsTrigger>
            </TabsList>

            <TabsContent value='overview'>
              <Row className='flex-wrap items-center gap-2'>
                <Tag color='success'>Active</Tag>
                <Text className='text-sm text-content-tertiary'>Overview content.</Text>
              </Row>
            </TabsContent>

            <TabsContent value='activity'>
              <Text className='text-sm text-content-tertiary'>Recent activity appears here.</Text>
            </TabsContent>

            <TabsContent value='settings'>
              <Text className='text-sm text-content-tertiary'>Project settings appear here.</Text>
            </TabsContent>
          </Tabs>
        </Demo>

        <Demo title='Breadcrumb'>
          <Breadcrumb
            items={[
              { label: 'Home', href: '#' },
              { label: 'Projects', href: '#' },
              { label: 'Trash Kit' }
            ]}
          />
        </Demo>

        <Demo title='Pagination'>
          <Pagination page={page} pageCount={5} onPageChange={setPage} />
        </Demo>

        <Demo title='Accordion' className='md:col-span-2'>
          <Accordion
            defaultOpen={['0']}
            items={[
              {
                title: 'What is trash-kit?',
                content: (
                  <Text className='text-sm text-content-tertiary'>
                    A Tailwind-first React component library.
                  </Text>
                )
              },
              {
                title: 'Does it work with Vite?',
                content: (
                  <Text className='text-sm text-content-tertiary'>
                    Yes. This showcase is built with Vite.
                  </Text>
                )
              },
              {
                title: 'Can styles be overridden?',
                content: (
                  <Text className='text-sm text-content-tertiary'>
                    Every component accepts a className.
                  </Text>
                )
              }
            ]}
          />
        </Demo>
      </DemoGrid>
    </ShowcaseSection>
  )
}
