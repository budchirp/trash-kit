import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ToastProvider } from '@trash-kit/ui'

import { App } from './app'

import './index.css'

const root = document.getElementById('root')
if (!root) {
  throw new Error('Root element not found')
}

createRoot(root).render(
  <StrictMode>
    <ToastProvider />
    <App />
  </StrictMode>
)
