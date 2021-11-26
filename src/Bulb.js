import react from "react"
import { useState } from "react"



function Bulb(props) {

  return (
    <div>
      <img
        alt="light-bulb"
        src="./bulb.png"
        className="bulb"
        style={{ background: props.switchedOn ? `radial-gradient(${props.color}, #282c34)` : 'none' }}
      />
      <button onClick={() => { props.setLights(props.color) }}>  {props.switchedOn ? "Switch off" : "Switch on"}</button >


    </div >
  )
}

export default Bulb