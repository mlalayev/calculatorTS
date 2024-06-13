import { useState } from 'react'
import './App.css'

function App() {

  const [startNum, setStartNum] = useState('0')

  const clickerHandler = (value:any) => {
    if (value === 'AC') {
      // Clear the calculator screen
      setStartNum('0')
    } else if (value === '=') {
      // Handle calculation if needed
      // Example: Implement calculation logic here
    } else {
      // Append clicked number or decimal point to the current startNum
      if (startNum === '0') {
        setStartNum(value.toString())
      } else {
        setStartNum(startNum + value.toString())
      }
    }
  }

  return (
    <div className="calculator">
      <div className="calculator__output">{startNum}</div>
      <div className="calculator__keys">
        <button onClick={() => clickerHandler('+')} className="calculator__key calculator__key--operator">+</button>
        <button onClick={() => clickerHandler('-')} className="calculator__key calculator__key--operator">-</button>
        <button onClick={() => clickerHandler('*')} className="calculator__key calculator__key--operator">&times;</button>
        <button onClick={() => clickerHandler('/')} className="calculator__key calculator__key--operator">÷</button>
        <button onClick={() => clickerHandler('7')} className="calculator__key">7</button>
        <button onClick={() => clickerHandler('8')} className="calculator__key">8</button>
        <button onClick={() => clickerHandler('9')} className="calculator__key">9</button>
        <button onClick={() => clickerHandler('4')} className="calculator__key">4</button>
        <button onClick={() => clickerHandler('5')} className="calculator__key">5</button>
        <button onClick={() => clickerHandler('6')} className="calculator__key">6</button>
        <button onClick={() => clickerHandler('1')} className="calculator__key">1</button>
        <button onClick={() => clickerHandler('2')} className="calculator__key">2</button>
        <button onClick={() => clickerHandler('3')} className="calculator__key">3</button>
        <button onClick={() => clickerHandler('0')} className="calculator__key">0</button>
        <button onClick={() => clickerHandler('.')} className="calculator__key">.</button>
        <button onClick={() => clickerHandler('AC')} className="calculator__key">AC</button>
        <button onClick={() => clickerHandler('=')} className="calculator__key calculator__key--enter">=</button>
      </div>
    </div>
  )
}

export default App
