import Lights from './Lights';
import ClickCounter from './ClickCounter';
import TodoList from './TodoList';
import Dashboard from './Dashboard';
import { useState } from 'react'

function App() {

  const [page, setPage] = useState("lights")
  const [clickCount, setClickCount] = useState(0)

  function getPage() {
    if (page === "lights") {
      return <Lights />
    } else if (page === "clicks") {
      return <ClickCounter
        clickCount={clickCount}
        setClickCount={setClickCount} />
    } else if (page === "todos") {
      return <TodoList />
    } else if (page === "dashboard") {
      return <Dashboard clickCount={clickCount} />
    }
  }

  return (
    <div className="app">
      <nav>
        <button onClick={() => setPage("lights")}>Lights</button>
        <button onClick={() => setPage("clicks")}>Click counter</button>
        <button onClick={() => setPage("todos")}>Todo list</button>
        <button onClick={() => setPage("dashboard")}>Dashboard</button>
      </nav>
      {getPage()}
    </div>
  );
}

export default App;
