import { useState } from 'react'

function Bulb(props) {
  let [switchedOn, setSwitchedOn] = useState(false)

  function handleClick() {
    if (switchedOn === true) {
      setSwitchedOn(false)
    } else {
      setSwitchedOn(true)
    }
  }

  return (
    <div>
      <p>{props.yellowThing}</p>
      <img
        alt="light-bulb"
        src="./bulb.png"
        className="bulb"
        style={{ background: props.light.switchedOn ? `radial-gradient(${props.light.color}, #282c34)` : 'none' }}
      />
      <button onClick={handleClick}> {props.light.switchedOn ? "Switch off" : "Switch on"}</button >
    </div >
  )
}

export default Bulb