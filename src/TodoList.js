import { useState } from 'react'

function TodoList() {
  const [todos, setTodos] = useState([])

  return (
    <section>
      <div>{todos.map((todo, index) =>
        <h2 style={{ color: todo.done ? "green" : "red" }} key={`todo-${index}`}>{todo.name}</h2>
      )}
      </div>
      <input placeholder="Add todo" />
      <button>Add</button>
    </section>
  )
}

export default TodoList