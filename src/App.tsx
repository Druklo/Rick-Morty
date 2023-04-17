import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { NotificationProvider } from './context/notification.context'
import { AppRouter } from './router'
import { Suspense } from 'react'

function App() {
  

  return (
    <NotificationProvider>
      <BrowserRouter>
        <Suspense fallback="Cargando...">
          <AppRouter/>
        </Suspense>
      </BrowserRouter>
    </NotificationProvider>
  )
}

export default App
