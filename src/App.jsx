import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Todo } from './components/Todo' 
import { TodoForm } from './components/TodoForm'
import { TodoWrapper } from './components/TodoWrapper'
import { EditTodoForm } from './components/EditTodoForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='App'>
      <TodoWrapper/>
     </div>

    </>
  )
}

export default App
