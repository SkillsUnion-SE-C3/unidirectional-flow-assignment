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
      <img
        alt="light-bulb"
        src="./bulb.png"
        className="bulb"
        style={{ background: switchedOn ? `radial-gradient(${props.color}, #282c34)` : 'none' }}
      />
      <button onClick={handleClick}>{switchedOn ? "Switch off" : "Switch on"}</button>
    </div>
  )
}

export default Bulb