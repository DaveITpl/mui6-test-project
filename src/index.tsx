import './index.css'

import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { App } from 'App'

import * as serviceWorker from './serviceWorker'

const container = document.getElementById('root')
const root = createRoot(container!)
const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 1, staleTime: 60000, refetchOnWindowFocus: false } },
})

root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
