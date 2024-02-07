import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

// two input fields (minutes and second) --> seconds will convert to minutes if exceed
// start button | pause button | reset button
// display timer

function App() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [time, setTime] = useState({
    seconds,
    minutes,
  });
  const [isRunning, setIsRunning] = useState(false);

  function handleSeconds(e) {
    setSeconds(e.target.value);
  }
  function handleMinutes(e) {
    setMinutes(e.target.value);
  }
  function handleStart(e) {
    let mins = minutes;
    let secs = seconds;
    if (secs > 60) {
      const minsToAdd = Math.floor(Number(secs) / 60);
      mins = Number(mins) + Number(minsToAdd);
      secs = Number(secs) % 60;
    }
    setMinutes(mins);
    setSeconds(secs);
    setTime({
      seconds: secs,
      minutes: mins,
    });
    if (minutes === 0 && seconds === 0) return;
    setIsRunning(true);
  }

  function handleReset() {
    setMinutes(0);
    setSeconds(0);
    setTime({
      seconds: "00",
      minutes: "00",
    });
    setIsRunning(false);
  }

  function handlePausePlay() {
    if (minutes === 0 && seconds === 0) return;
    setIsRunning((prev) => !prev);
  }

  useEffect(
    function () {
      if (!isRunning) return;
      const interval = setInterval(function () {
        console.log("runnin");
        setTime((prev) => {
          let mins = Number(prev.minutes);
          let secs = Number(prev.seconds);
          if (secs <= 60 && secs > 0) secs = secs - 1;
          if (mins > 0 && secs === 0) {
            mins = mins - 1;
            secs = 60;
          }
          const time = {
            minutes: mins,
            seconds: secs,
          };
          if (mins === 0 && secs === 0) setIsRunning(false);

          return time;
        });
      }, 1000);

      return () => clearInterval(interval);
    },
    [isRunning]
  );

  return (
    <div className='App'>
      <input value={minutes} type='number' onChange={handleMinutes} />
      <input value={seconds} type='number' onChange={handleSeconds} />
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePausePlay}>Pause/Play</button>
      <button onClick={handleReset}>Reset</button>
      <br />
      {(time.minutes + "").length === 1 ? `0${time.minutes}` : time.minutes}:
      {(time.seconds + "").length === 1 ? `0${time.seconds}` : time.seconds}
    </div>
  );
}

export default App;
