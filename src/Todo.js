function Todo(props) {
  return (
    <div>
      <h2 style={{ color: props.todo.done ? "green" : "red" }}>
        {props.todo.name}
      </h2>
      <button onClick={() => props.completeTodo(props.todo.name)}>Complete</button>
      <button onClick={() => props.removeTodo(props.todo)}>Remove</button>
    </div>
  )
}

export default Todo