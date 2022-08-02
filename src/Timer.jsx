import { useState, useEffect } from "react";
import { imgStyling } from "./styling";

export default function Timer() {
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    const counter = setInterval(() => {
      setTimer(timer + 1);
    }, 1000);
    return () => {
      clearInterval(counter);
    };
  }, [timer]);
  return <div style={imgStyling}>{timer} Seconds</div>;
}
