import './App.css';
import { useState } from 'react';

function App() {
  const [ calc, setCalc ] = useState("");
  const [ result, setResult ] = useState("");
  
  const operator = [ '/', '*', '+', '-', '.'];
  
  const handleResult = () => {
    setCalc('');
    setResult(eval(calc).toString())
  }

  const handleDelete = () => {
    if (calc == '') {
       return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
    setResult(value);
  }

  const updateCalc = ( value ) => {
    if (
      operator.includes(value) && calc === '' ||
      operator.includes(value) && operator.includes(calc.slice(-1))
    
    ) {
      return;
    }

    if (!operator.includes(value)) {
       setResult(eval(calc + value).toString())
    }
        setCalc( calc + value);
  }
  
  const createDigits = () => {
    let digits = [];

    for (let i = 0; i <= 9; i++) {
      
      digits = [...digits,
      <button 
        key={i} 
        onClick={() => updateCalc(i.toString())}
      >{i}

      </button>
      ];
    }

    return digits;
  }
 
  return (
    <div className="App">
       <div className="calculator">

            <div className='display'>
             { result  ? <span className='results'>{result}</span> : ''} { calc || result || 0}
            </div>

            <div className="operators">
              <button onClick={handleDelete}>DEL</button>
              <button onClick={() => updateCalc('/')}>/</button>
              <button onClick={() => updateCalc('*')}>*</button>
              <button onClick={() => updateCalc('+')}>+</button>
              <button onClick={() => updateCalc('-')}>-</button>
            </div>
            <div className="digitis"> 
              { createDigits() }
              <button onClick={handleResult}>=</button>
              <button onClick={() => updateCalc('.')}>.</button>
            </div>
       </div>
    </div>
  );
}

export default App;
