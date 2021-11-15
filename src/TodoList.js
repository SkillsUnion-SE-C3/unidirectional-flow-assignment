import { useState } from 'react'
import Todo from './Todo'

function TodoList() {
  const [todos, setTodos] = useState([])
  const [value, setValue] = useState("")

  function handleChange(event) {
    setValue(event.target.value)
  }

  function addTodo(e) {
    e.preventDefault()
    setTodos([...todos, { name: value, done: false }])
  }

  return (
    <section>
      <div>{todos.map((todo, index) =>
        <Todo key={`todo-${index}`} todo={todo} />
      )}
      </div>
      <form>
        <input onChange={handleChange} placeholder="Add todo" />
        <button type="submit" onClick={addTodo}>Add</button>
      </form>
    </section>
  )
}

export default TodoList