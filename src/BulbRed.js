function BulbRed() {
  return (
    <div>
      <img
        alt="light-bulb"
        src="./bulb.png"
        className="bulb"
        style={{ background: "radial-gradient(red, #282c34)" }}
      />
      <button>Flick the switch</button>
    </div>
  )
}

export default BulbRed