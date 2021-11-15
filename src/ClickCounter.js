import { useState } from 'react'

function ClickCounter() {

  const [clickCount, setClickCount] = useState(0)

  return (
    <section className="section-lightgray">
      <h1>Number of times button was clicked:</h1>
      <h1>{clickCount}</h1>
      <button onClick={() => { setClickCount(clickCount + 1) }}>Click me</button>
    </section>
  )
}

export default ClickCounter