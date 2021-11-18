function Dashboard(props) {

  return (
    <section>
      <div>
        {props.lights.map((light, index) => {
          return <h1 key={`d-light-${index}`} className="dark-text">{`${light.color} light is ${light.switchedOn ? "on" : "off"}`}</h1>
        })}
      </div>
    </section>
  )
}

export default Dashboard