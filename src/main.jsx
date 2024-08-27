import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { StateProvider } from './utils/StateProvider.jsx'
import Reducer, { intialState } from './utils/Reducer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StateProvider intialState = {intialState} reducer = {Reducer}>
      <App />
    </StateProvider>  
  </StrictMode>,
)
