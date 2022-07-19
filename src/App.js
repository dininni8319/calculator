import logo from './logo.svg';
import './App.css';
import { usestate } from 'react';

function App() {
  // const [ total, setTotal ] = usestate(0);
  function general(val1, val2, action ) {
    let total = 0
    
  }
  return (
    <div className="App">
       <div className="row custom-row">
            <header className='custom-header'>

            </header>
            <main className="custom-main">
                  <div className="custom-cell">
                    <button>Clear</button>
                    <button>/</button>
                    <button>*</button>
                    <button>=</button>
                  </div>
                  <div className="custom-cell">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                  </div>
                  <div className="custom-cell">
                    <button>5</button>
                    <button>6</button>
                    <button>7</button>
                    <button>-</button>
                  </div>
                  <div className="custom-cell">
                    <button>8</button>
                    <button>9</button>
                    <button>0</button>
                    <button>+</button>
                  </div>
            </main>
       </div>
    </div>
  );
}

export default App;
