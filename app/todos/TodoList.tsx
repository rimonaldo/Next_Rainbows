import React from 'react'
import { Todo } from '../../typing'
const fetchTodos = async () => {
    const res = await fetch ("https://jsonplaceholder.typicode.com/todos")
    const todos:Todo[] = await res.json()
} 
function TodoList() {
  return (
    <div>TodoList</div>
  )
}

export default TodoList