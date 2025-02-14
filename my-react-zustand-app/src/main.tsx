import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TodoList from './components/TodoList.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodoList />
  </StrictMode>,
)
