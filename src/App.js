import { formatTime } from "./formatTime";
import useTimer from "./useTimer";

function App() {
  const { time, startTimer, stopTimer, resetTimer, lapTimer, clearLaps,laps, active } = useTimer(0);

  return (
    <div className="App container">
      <div className="timer">
      <h1>Coder Timer</h1>
      <div className="timer__wrapper">
        <div className="timer__display">
          <p>{formatTime(time)}</p>
        </div>
        <div className="button__wrapper">
          <button className="button" onClick={lapTimer}>
            Lap
          </button>
  
          <button className="button" onClick={stopTimer}>
            Stop
          </button>
          <button
            className="button"
            ref={active}
            onClick={startTimer}
          >
            Start
          </button>
          <button className="button" onClick={resetTimer}>
            Reset
          </button>
          <button className="button" onClick={clearLaps}>
            Clear Laps
          </button>
        </div>
        </div>
        </div>
      <div>
      {laps.map((lap, index) => (
      <div className="lap-list" key={index + 1} >
      <p >Lap     {index + 1}: {formatTime(lap)}</p>
      </div>))
      }
      </div>
    </div>
  )
}

export default App;
