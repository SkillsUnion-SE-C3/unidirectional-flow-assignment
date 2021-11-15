function Todo(props) {
  return (
    <h2 style={{ color: props.todo.done ? "green" : "red" }}>
      {props.todo.name}
    </h2>
  )
}

export default Todo