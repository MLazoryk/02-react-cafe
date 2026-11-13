import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'modern-normalize'; // Connects the styles
import App from './components/App/App.tsx'; // Updated path

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)