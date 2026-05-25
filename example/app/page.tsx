'use client'

import type React from 'react'
import { useState } from 'react'

import {
  Box,
  BoxContent,
  Button,
  Checkbox,
  Column,
  Container,
  Divider,
  Field,
  Heading,
  Input,
  Label,
  Row,
  Section,
  Tag,
  Text,
  toast
} from '@trash-kit/ui'

const Page: React.FC = (): React.ReactNode => {
  const [checked, setChecked] = useState(false)

  return (
    <Section>
      <Container>
        <Section title='Typography'>
          <Column className='gap-4'>
            <Column className='gap-2'>
              <Heading size='h1'>Heading h1</Heading>
              <Heading size='h2'>Heading h2</Heading>
              <Heading size='h3'>Heading h3</Heading>
              <Heading size='h4'>Heading h4</Heading>
              <Heading size='h5'>Heading h5</Heading>
              <Heading size='h6'>Heading h6</Heading>
            </Column>

            <Text>
              This is a Text component. It is used for body text. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </Text>
          </Column>
        </Section>

        <Section title='Box'>
          <Column className='gap-4'>
            <Box color='primary'>
              <BoxContent>
                <Text>Primary</Text>
              </BoxContent>
            </Box>

            <Box color='primary' clickable>
              <BoxContent>
                <Text>Primary (clickable)</Text>
              </BoxContent>
            </Box>

            <Box color='secondary'>
              <BoxContent>
                <Text>Secondary</Text>
              </BoxContent>
            </Box>

            <Box color='secondary' clickable>
              <BoxContent>
                <Text>Secondary (clickable)</Text>
              </BoxContent>
            </Box>

            <Box color='accent'>
              <BoxContent>
                <Text>Accent</Text>
              </BoxContent>
            </Box>

            <Box color='accent' clickable>
              <BoxContent>
                <Text>Accent (clickable)</Text>
              </BoxContent>
            </Box>

            <Box color='primary'>
              <BoxContent padding='sm'>
                <Text>Compact content padding</Text>
              </BoxContent>
            </Box>
          </Column>
        </Section>

        <Section title='Tag'>
          <Column className='gap-4 shrink'>
            <Tag color='primary'>Surface primary</Tag>
            <Tag color='secondary'>Surface secondary</Tag>
            <Tag color='accent'>Accent</Tag>
            <Tag color='primary' clickable>
              Clickable style
            </Tag>
          </Column>
        </Section>

        <Section title='Divider'>
          <Column className='gap-4'>
            <Divider />
            <Divider thickness='thick' />

            <Row className='h-12 gap-4 items-stretch'>
              <Text>Left</Text>
              <Divider orientation='vertical' />
              <Text>Right</Text>
            </Row>
          </Column>
        </Section>

        <Section title='Form'>
          <Column className='gap-4 max-w-md'>
            <Field name='email'>
              <Label>Email Address</Label>
              <Input placeholder='Enter your email' />
            </Field>

            <Field name='password'>
              <Label>Password</Label>
              <Input type='password' placeholder='Enter your password' />
            </Field>

            <Field name='search'>
              <Label>With Icons</Label>

              <Input
                placeholder='Search...'
                icons={{
                  leading: <span>🔍</span>,
                  trailing: <span>CMD+K</span>
                }}
              />
            </Field>

            <Field name='disabled'>
              <Label>Disabled</Label>
              <Input disabled placeholder='Disabled input' />
            </Field>

            <Field name='error' error='This field has an error'>
              <Label>Error State</Label>
              <Input placeholder='Input with error text' />
            </Field>

            <Field name='terms' type='row'>
              <Checkbox
                onChange={(e) => setChecked(e.target.checked)}
                checked={checked}
                id='terms'
              />
              <Label>I agree to the terms and conditions</Label>
            </Field>

            <Field name='newsletter'>
              <Checkbox>Subscribe to product updates</Checkbox>
            </Field>
          </Column>
        </Section>

        <Section title='Button'>
          <Row className='gap-4 flex-wrap'>
            <Button color='accent'>Accent</Button>
            <Button color='primary'>Surface primary</Button>
            <Button color='secondary'>Surface secondary</Button>
            <Button color='danger'>Surface danger</Button>
            <Button disabled>Disabled</Button>
            <Button loading>Loading</Button>
            <Button loading />
            <Button shape='circle'>+</Button>
          </Row>
        </Section>

        <Section title='Toast'>
          <Button onClick={() => toast('This is a toast message!')}>Trigger Toast</Button>
        </Section>
      </Container>
    </Section>
  )
}

export default Page
