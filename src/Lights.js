import Bulb from './Bulb';

function Lights(props) {

  return (
    <section className="section-gray">
      {props.lights.map((light, index) => {
        return <Bulb key={`light-${index}`} />
      })}
    </section>
  )
}

export default Lights