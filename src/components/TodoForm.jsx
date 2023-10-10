import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    // console.log(value)
    addTodo(value);
    setValue("");
  }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" value={value} className='todo-input' placeholder='What is the task today?' onChange={(e) => setValue(e.target.value)}/>
        <button type="submit" className='todo-btn'>
            Add Task
        </button>
    </form>
  )
}
