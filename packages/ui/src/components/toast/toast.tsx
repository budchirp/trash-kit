'use client'

import type React from 'react'

import { toast as sonnerToast } from 'sonner'
import { Box, BoxContent } from '@/components/box'

export const toast = (title: string) => {
  return sonnerToast.custom(
    (): React.ReactElement => (
      <Box color='secondary' className='w-48 shadow-2xl md:w-lg'>
        <BoxContent>{title}</BoxContent>
      </Box>
    )
  )
}
