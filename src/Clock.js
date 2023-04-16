import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleString('en-US'));
  
  const updateClock = () => {
    setTime(new Date().toLocaleString('en-US'))
    console.log("changing time")
  }

  useEffect(() => {
    const timerId = setInterval(updateClock, 1000);
    // clearInterval(timerId);
    return () => clearInterval(timerId);
    
  }, [])

  return <div>{time}</div>
}

export default Clock;