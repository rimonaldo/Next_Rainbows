import React, { useEffect } from 'react'
import { Todo } from '../../../typing'
import Link from 'next/link'
const fetchTodos = async () => {
   const res = await fetch('https://jsonplaceholder.typicode.com/todos')
   const todos: Todo[] = await res.json()
   return todos
}

async function TodoList() {
   const todos = await fetchTodos()

   return (
      <>
         {todos.map(todo => {
            return <p key={todo.id}>
               <Link href={`/todos/${todo.id}`}>Todo:{todo.id}</Link>
            </p>
         })}
      </>
   )
}

export default TodoList
