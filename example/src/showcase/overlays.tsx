import type React from 'react'
import { useState } from 'react'

import {
  Backdrop,
  Box,
  BoxContent,
  Button,
  Column,
  Dialog,
  DialogActions,
  DialogContent,
  Field,
  Heading,
  Input,
  Label,
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
  Row,
  Text,
  toast
} from '@trash-kit/ui'

import { Demo, DemoGrid, ShowcaseSection } from './demo'

export const Overlays: React.FC = (): React.ReactNode => {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [backdropOpen, setBackdropOpen] = useState(false)

  return (
    <ShowcaseSection id='overlays' title='Overlays'>
      <DemoGrid>
        <Demo title='Dialog & backdrop' className='md:col-span-2'>
          <Row className='flex-wrap gap-2'>
            <Button onClick={() => setDialogOpen(true)}>Open dialog</Button>
            <Button color='secondary' onClick={() => setBackdropOpen(true)}>
              Open backdrop
            </Button>
          </Row>

          <Dialog
            open={dialogOpen}
            onClose={() => setDialogOpen(false)}
            aria-label='Invite teammate'
          >
            <DialogContent>
              <Column className='gap-1'>
                <Heading size='h3'>Invite teammate</Heading>
                <Text className='text-sm text-content-tertiary'>Send an invitation by email.</Text>
              </Column>

              <Field name='invite-email'>
                <Label>Email</Label>
                <Input type='email' placeholder='teammate@example.com' />
              </Field>
            </DialogContent>

            <DialogActions>
              <Button color='secondary' onClick={() => setDialogOpen(false)}>
                Cancel
              </Button>
              <Button
                onClick={() => {
                  setDialogOpen(false)
                  toast('Invitation sent', { color: 'success' })
                }}
              >
                Send invite
              </Button>
            </DialogActions>
          </Dialog>

          <Backdrop
            open={backdropOpen}
            onClose={() => setBackdropOpen(false)}
            className='flex items-center justify-center p-4'
          >
            <Box color='primary' className='max-w-sm' onClick={(event) => event.stopPropagation()}>
              <BoxContent className='gap-4'>
                <Column className='gap-1'>
                  <Heading size='h3'>Backdrop</Heading>
                  <Text className='text-sm text-content-tertiary'>Click outside to close.</Text>
                </Column>

                <Button onClick={() => setBackdropOpen(false)}>Close</Button>
              </BoxContent>
            </Box>
          </Backdrop>
        </Demo>

        <Demo title='Menu'>
          <Menu>
            <MenuTrigger>Project actions</MenuTrigger>
            <MenuContent>
              <MenuItem>Open</MenuItem>
              <MenuItem>Duplicate</MenuItem>
              <MenuItem>Archive</MenuItem>
            </MenuContent>
          </Menu>
        </Demo>

        <Demo title='Toasts'>
          <Row className='flex-wrap gap-2'>
            <Button
              color='success'
              onClick={() =>
                toast('Saved', {
                  description: 'Your changes were applied.',
                  color: 'success'
                })
              }
            >
              Success
            </Button>

            <Button
              color='danger'
              onClick={() =>
                toast('Upload failed', {
                  description: 'Check the file and try again.',
                  color: 'danger'
                })
              }
            >
              Error
            </Button>

            <Button
              color='warning'
              onClick={() =>
                toast('Storage almost full', {
                  description: 'Free up space to keep syncing.',
                  color: 'warning'
                })
              }
            >
              Warning
            </Button>
          </Row>
        </Demo>
      </DemoGrid>
    </ShowcaseSection>
  )
}
