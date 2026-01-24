import type React from 'react'

import { Google_Sans } from 'next/font/google'

import type { Metadata } from 'next'

import './globals.css'
import { ToastProvider } from '@trash-kit/ui'

const googleSans = Google_Sans({
  subsets: ['latin'],
  variable: '--font-main'
})

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps): React.ReactNode => {
  return (
    <html lang='en'>
      <body className={googleSans.variable}>
        <ToastProvider />

        {children}
      </body>
    </html>
  )
}

export default Layout
