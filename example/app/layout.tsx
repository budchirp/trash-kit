import type React from 'react'

import type { Metadata } from 'next'

import { ToastProvider } from '../../packages/ui/dist/index.mjs'

import '@/app/globals.css'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <ToastProvider />

        {children}
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'Trash UI',
  description: 'Trash UI'
}
