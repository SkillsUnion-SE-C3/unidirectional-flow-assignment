import Lights from './Lights';
import Dashboard from './Dashboard';
import { useState } from 'react'

/*
  Your task is to render the information about lights.
  We should see the lights in Lights component and text information on Dashboard component

  As both Lights component and Dashboard component need to know
  the state of lights, that state has been defined in App component.

  1. Pass the light state down correctly to see the information about lights displayed
    1.1 App > Lights > Bulb
    1.2 App > Dashboard

  2. Make the button on Bulb component functional. 
    When the button is clicked the light should be switched on or off

  3. If you have set everything up correctly the change should also appear in
    Dashboard.js

  4. Have a look at result.gif to see what is expected.
*/


function App() {
  const initialLights = [
    { color: "red", switchedOn: false },
    { color: "blue", switchedOn: false },
    { color: "yellow", switchedOn: false }
  ]

  const [page, setPage] = useState("lights")
  const [lights, setLights] = useState(initialLights)

  function getPage() {
    if (page === "lights") {
      return <Lights />
    } else if (page === "dashboard") {
      return <Dashboard />
    }
  }

  return (
    <div className="app">
      <nav>
        <button onClick={() => setPage("lights")}>Lights</button>
        <button onClick={() => setPage("dashboard")}>Dashboard</button>
      </nav>
      {getPage()}
    </div>
  );
}

export default App;
