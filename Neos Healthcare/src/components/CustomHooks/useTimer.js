import { useEffect, useState } from "react";
const useTimer = (totalDuration) => {


  let [time, setTime] = useState(Number(totalDuration) * 60);

  const [timerOn, setTimerOn] = useState(false);


  useEffect(() => {
    let interval = null;


    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime > 0 ? prevTime - 1 : prevTime);
      }, 1000);
    } else if (!timerOn) {
      clearInterval(interval);
      setTime(Number(totalDuration) * 60);
    }

    return () => clearInterval(interval);

  }, [timerOn]);


  return {

    time,
    setTimerOn,

  }


}

export default useTimer