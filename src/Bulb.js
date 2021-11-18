function Bulb(props) {
  return (
    <div>
      <img
        alt="light-bulb"
        src="./bulb.png"
        className="bulb"
        style={{ background: props.light.switchedOn ? `radial-gradient(${props.light.color}, #282c34)` : 'none' }}
      />
      <button> {props.light.switchedOn ? "Switch off" : "Switch on"}</button >
    </div >
  )
}

export default Bulb