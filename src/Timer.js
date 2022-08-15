import { useState, useEffect } from "react";

export default function Timer() {
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    const counter = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => {
      clearInterval(counter);
    };
  }, []);

  return [timer];
}
