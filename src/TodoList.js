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

  function completeTodo(name) {
    const newTodos = todos.map((item) => {
      if (item.name === name) {
        return { ...item, done: true }
      } else {
        return item
      }
    })

    setTodos(newTodos)
  }

  function removeTodo(todo) {
    const newTodos = todos.filter((todoItem) => todoItem !== todo)
    setTodos(newTodos)
  }

  return (
    <section>
      <div>{todos.map((todo, index) =>
        <Todo index={index} removeTodo={removeTodo} completeTodo={completeTodo} key={`todo-${index}`} todo={todo} />
      )}
      </div>
      <form>
        <input onChange={handleChange} placeholder="Add todo" />
        <button type="submit" onClick={addTodo}>Add</button>
      </form>
    </section >
  )
}

export default TodoList