import './TrafficLight.css'
import { useEffect, useState } from 'react'

const Circle = ({ color }) => {
  return <div className={`light ${color}`}></div>
}

const TrafficLight = () => {
  const [lightColors, setLightColor] = useState({
    red: "red",
    yellow: "gray",
    green: "gray",
    next: "yellow"
  });

  // color doesn't change every time.
  const handleChange = () => {
    // console.log(`current color: ${lightColors}`)
    switch (lightColors.next) {
      case "red":
        setLightColor({
          red: "gray",
          yellow: "gray",
          green: "green",
          next: "green"
        });
        break;
      case "yellow":
        setLightColor({
          red: "gray",
          yellow: "yellow",
          green: "gray",
          next: "red"
        });
        break;
      case "green":
        setLightColor({
          red: "red",
          yellow: "gray",
          green: "gray",
          next: "yellow"
        });
        break;
    }
  }

  useEffect(() => {
    setInterval(handleChange, 5000)
  }, []);
  

  return (
    <div>
      <h1>Traffic Light</h1>
      <div className='lights-container'>
        <Circle color={lightColors.red}></Circle>
        <Circle color={lightColors.yellow}></Circle>
        <Circle color={lightColors.green}></Circle>
      </div>
    </div>
  )
}

export default TrafficLight;



// const Clock = () => {
//   const [time, setTime] = useState(new Date().toLocaleString('en-US'));
  
//   const updateClock = () => {
//     setTime(new Date().toLocaleString('en-US'))
//   }

//   useEffect(() => {
//     setInterval(updateClock, 1000);
//   }, [])

//   return <div>{time}</div>
// }