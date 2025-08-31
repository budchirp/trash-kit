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
  Input,
  Row,
  Section,
  Text,
  toast
} from '../../packages/ui/dist/index.mjs'

const Page: React.FC = (): React.ReactNode => {
  const [checked, setChecked] = useState(false)

  return (
    <Column className='gap-8'>
      <Container>
        <Section title='Section' description='Description'>
          <Box>
            <BoxContent>
              <Button onClick={() => toast('Hello')}>open toast</Button>
            </BoxContent>

            <Divider />

            <BoxContent>
              <Row>
                <Button>click</Button>
                <Button>click</Button>
              </Row>

              <Text>Text</Text>
            </BoxContent>
          </Box>
        </Section>
      </Container>

      <Divider />

      <Container>
        <Column padding='none'>
          <Field label='Field'>
            <Input placeholder='input' />
          </Field>

          <Field label='Field'>
            <Input placeholder='input' />
          </Field>

          <Field label='Checkbox' type='row'>
            <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
          </Field>

          <Button>Submit</Button>
        </Column>
      </Container>
    </Column>
  )
}

export default Page
