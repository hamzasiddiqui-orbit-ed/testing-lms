// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AuthProvider } from './contexts/AuthContext'
import App from './App.jsx'
import './index.css'
import {NextUIProvider} from "@nextui-org/react";

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <NextUIProvider>
          <App />
        </NextUIProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)