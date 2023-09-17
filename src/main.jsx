import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AppProvider } from './context'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import './index.css'

// * Instance of Query Client to use all over all
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  </AppProvider>
)
