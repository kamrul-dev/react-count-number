import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <h1>Counting numbers</h1>
      <Counting></Counting>
    </div>
  );
}

function Counting() {
  const [counts, setCount] = useState(0);
  const increaseNumber = () => { setCount(counts + 1) }
  const decreaseNumber = () => {
    if (counts > 0) {
      setCount(counts - 1)
    }
  }
  return (
    <div>
      <h2>Count: {counts}</h2>
      <button onClick={increaseNumber}>Inrease</button>
      <button onClick={decreaseNumber}>Decrease</button>
    </div>
  )
}



export default App;
