import { useState } from 'react';
import './App.css';

function App() {
  const [startNum, setStartNum] = useState('');
  const [isScientific, setIsScientific] = useState(false);

  const toggleScientific = () => {
    setIsScientific(!isScientific);
  };

  const clickerHandler = (e: any) => {
    let value = e.target.value

    if (value === "AC") {
      setStartNum("0")
    } else if (value === "DE") {
      if (startNum.length === 1) {
        setStartNum("0")
      } else {
        setStartNum(startNum.slice(0, -1))
      }
    } else if (value === "=") {
      setStartNum(eval(startNum).toString())
    } else {
      if (startNum === "0") {
        setStartNum(value)
      } else {
        setStartNum(startNum + value)
      }
    }
  }

  return (
    <div className="calculator">
      <div className="calculator__output">{startNum}</div>
      <div className="calculator__keys">
        <button onClick={clickerHandler} value="+" className="calculator__key calculator__key--operator">+</button>
        <button onClick={clickerHandler} value="-" className="calculator__key calculator__key--operator">-</button>
        <button onClick={clickerHandler} value="*" className="calculator__key calculator__key--operator">&times;</button>
        <button onClick={clickerHandler} value="/" className="calculator__key calculator__key--operator">÷</button>
        <button onClick={clickerHandler} value="7" className="calculator__key">7</button>
        <button onClick={clickerHandler} value="8" className="calculator__key">8</button>
        <button onClick={clickerHandler} value="9" className="calculator__key">9</button>
        <button onClick={clickerHandler} value="4" className="calculator__key">4</button>
        <button onClick={clickerHandler} value="5" className="calculator__key">5</button>
        <button onClick={clickerHandler} value="6" className="calculator__key">6</button>
        <button onClick={clickerHandler} value="1" className="calculator__key">1</button>
        <button onClick={clickerHandler} value="2" className="calculator__key">2</button>
        <button onClick={clickerHandler} value="3" className="calculator__key">3</button>
        <button onClick={clickerHandler} value="0" className="calculator__key">0</button>
        <button onClick={clickerHandler} value="." className="calculator__key">.</button>
        <button onClick={clickerHandler} value="DE" className="calculator__key">DEL</button>
        <button onClick={clickerHandler} value="=" className="calculator__key calculator__key--enter">=</button>
        <button onClick={clickerHandler} value="AC" className="calculator__key delete__key--enter">AC</button>
        <button onClick={toggleScientific} value="SCAL" className="calculator__key scal__key--enter">SCAL</button>
      </div>
      {isScientific && (
        <div className="scientific__keys">
          <button onClick={clickerHandler} value="sin(" className="calculator__key calculator__key--scientific">sin</button>
          <button onClick={clickerHandler} value="cos(" className="calculator__key calculator__key--scientific">cos</button>
          <button onClick={clickerHandler} value="tan(" className="calculator__key calculator__key--scientific">tan</button>
          <button onClick={clickerHandler} value="log(" className="calculator__key calculator__key--scientific">log</button>
          <button onClick={clickerHandler} value="sqrt(" className="calculator__key calculator__key--scientific">√</button>
          <button onClick={clickerHandler} value="^" className="calculator__key calculator__key--scientific">^</button>
        </div>
      )}
    </div>
  );
}

export default App;
