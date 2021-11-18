function Dashboard(props) {

  return (
    <section>
      <h1 className="dark-text">
        Current click count is {props.clickCount}
      </h1>
    </section>
  )
}

export default Dashboard