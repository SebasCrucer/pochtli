
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './contexts/Theme.context.tsx'
import { SessionProvider } from './contexts/Session.tsx'
import { AproximatinCicleProvider } from './contexts/AproximationCicle.tsx'

createRoot(document.getElementById('root')!).render(
  <AproximatinCicleProvider>
    <ThemeProvider>
      <SessionProvider>
        <App />
      </SessionProvider>
    </ThemeProvider>
  </AproximatinCicleProvider>
)
