import type React from 'react'

import {
  Button,
  Checkbox,
  Column,
  DragAndDropFileField,
  Field,
  FileField,
  Grid,
  Input,
  Label,
  Radio,
  RadioGroup,
  Row,
  Select,
  Switch,
  Text,
  toast
} from '@trash-kit/ui'

import { Demo, DemoGrid, ShowcaseSection } from './demo'

export const Forms: React.FC = (): React.ReactNode => {
  return (
    <ShowcaseSection id='forms' title='Forms'>
      <DemoGrid>
        <Demo title='Fields' className='md:col-span-2'>
          <form
            className='flex flex-col gap-4'
            onSubmit={(event) => {
              event.preventDefault()
              toast('Saved')
            }}
          >
            <Grid className='gap-4 md:grid-cols-2'>
              <Field name='name'>
                <Label>Name</Label>
                <Input placeholder='Ada Lovelace' />
              </Field>

              <Field name='email'>
                <Label>Email</Label>
                <Input type='email' placeholder='ada@example.com' />
              </Field>

              <Field name='username'>
                <Label>Username</Label>
                <Input
                  placeholder='ada'
                  icons={{ leading: <span className='text-content-tertiary'>@</span> }}
                />
              </Field>

              <Field name='search'>
                <Label>Search</Label>
                <Input
                  placeholder='Search projects'
                  icons={{
                    trailing: <span className='text-xs text-content-tertiary'>⌘K</span>
                  }}
                />
              </Field>

              <Field name='secondary'>
                <Label>Secondary</Label>
                <Input color='secondary' placeholder='Secondary surface' />
              </Field>

              <Field name='locked' disabled>
                <Label>Disabled</Label>
                <Input placeholder='Unavailable' />
              </Field>
            </Grid>

            <Field name='bio'>
              <Label>Bio</Label>
              <Input textarea rows={3} placeholder='A short bio.' />
            </Field>

            <Field name='invalid' error='This email is already in use.'>
              <Label>Email with error</Label>
              <Input defaultValue='ada@example.com' />
            </Field>

            <Row className='gap-2'>
              <Button type='submit'>Save</Button>
              <Button type='reset' color='secondary'>
                Reset
              </Button>
            </Row>
          </form>
        </Demo>

        <Demo title='Select'>
          <Column className='gap-4'>
            <Field name='plan'>
              <Label>Plan</Label>
              <Select defaultValue='pro'>
                <option value='starter'>Starter</option>
                <option value='pro'>Pro</option>
                <option value='team'>Team</option>
              </Select>
            </Field>

            <Field name='locked-plan' disabled>
              <Label>Disabled</Label>
              <Select defaultValue='archive'>
                <option value='archive'>Archive</option>
                <option value='active'>Active</option>
              </Select>
            </Field>
          </Column>
        </Demo>

        <Demo title='Radio group'>
          <Field name='role'>
            <Label>Role</Label>
            <RadioGroup defaultValue='member' orientation='horizontal'>
              <Radio value='member'>Member</Radio>
              <Radio value='admin'>Admin</Radio>
              <Radio value='owner'>Owner</Radio>
            </RadioGroup>
          </Field>

          <Field name='accent-role'>
            <Label>Accent</Label>
            <RadioGroup defaultValue='one' color='accent' orientation='horizontal'>
              <Radio value='one'>One</Radio>
              <Radio value='two'>Two</Radio>
            </RadioGroup>
          </Field>
        </Demo>

        <Demo title='Toggles' className='md:col-span-2'>
          <Grid className='gap-6 md:grid-cols-2'>
            <Column className='gap-2'>
              <Text className='text-xs font-semibold text-content-tertiary uppercase tracking-wider'>
                Checkboxes
              </Text>

              <Checkbox defaultChecked>Email updates</Checkbox>
              <Checkbox>Product news</Checkbox>
              <Checkbox disabled>Disabled</Checkbox>
            </Column>

            <Column className='gap-3'>
              <Text className='text-xs font-semibold text-content-tertiary uppercase tracking-wider'>
                Switches
              </Text>

              <Switch color='primary' defaultChecked>
                Primary
              </Switch>
              <Switch defaultChecked>Accent</Switch>
              <Switch size='sm' defaultChecked>
                Small
              </Switch>
            </Column>
          </Grid>
        </Demo>

        <Demo title='Files' className='md:col-span-2'>
          <Grid className='gap-4 lg:grid-cols-2'>
            <Field name='file'>
              <Label>File field</Label>
              <FileField />
            </Field>

            <Field name='documents'>
              <Label>Drop zone</Label>
              <DragAndDropFileField multiple description='PDF, PNG, or JPG.'>
                Upload documents
              </DragAndDropFileField>
            </Field>
          </Grid>
        </Demo>
      </DemoGrid>
    </ShowcaseSection>
  )
}
