import React from 'react'
import { createRoot } from 'react-dom/client'
import Todo from './components/Todo'
import './styles/reset.css'
import './styles/styles.css'

const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(
  <Todo />
)
