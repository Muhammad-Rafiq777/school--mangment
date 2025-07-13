import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FormContextProvider from './context/FormContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <FormContextProvider>
    <App />
    </FormContextProvider>
  </BrowserRouter>,
)
