
function ClickCounter(props) {

  return (
    <section className="section-lightgray">
      <h1>Number of times button was clicked:</h1>
      <h1>{props.clickCount}</h1>
      <button onClick={
        () => props.setClickCount(props.clickCount + 1)
      }>
        Click me
      </button>
    </section>
  )
}

export default ClickCounter