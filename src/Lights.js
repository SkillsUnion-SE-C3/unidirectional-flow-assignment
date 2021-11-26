import Bulb from './Bulb';

function Lights(props) {

  return (
    <section className="section-gray">
      {props.lights.map((light, index) => {
        console.log(light)
        return <Bulb key={`light-${index}`} color={light.color} switchedOn={light.switchedOn} setLights={props.apple} />
      })}
    </section>
  )
}

export default Lights