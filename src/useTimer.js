import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(0);

  const isStart = useRef(false);
  const active = useRef();
  const refInterval = useRef(null);
  const [laps, setLaps] = useState([]);

  const startTimer = () => {
    isStart.current = true;
    active.current.disabled = true;
    refInterval.current = setInterval(() => {
        setTime((time) => time + 1);
    }, 1000)
  };

  const stopTimer = () => {
    isStart.current = true;
    active.current.disabled = false;
    clearInterval(refInterval.current);
  };
  
  const resetTimer = () => {
    setTime(0);
    // setLaps([]);
    clearInterval(refInterval.current);
    active.current.disabled = false;
  };

  const lapTimer = () => {
    setLaps((prevLap) => [...prevLap, time])
  };

  const clearLaps = () => {
    setLaps([]);
  }

  return { time, startTimer, stopTimer, resetTimer, laps, lapTimer,clearLaps, active };
};
export default useTimer;
