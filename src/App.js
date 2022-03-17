import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counting></Counting>
    </div>
  );
}

// Create a counting component
function Counting() {
  const [counts, setCount] = useState(0);
  const increaseNumber = () => { setCount(counts + 1) }
  const decreaseNumber = () => {
    if (counts > 0) {
      setCount(counts - 1)
    }
  }
  return (
    // Display results on UI
    <div>
      <h1>Counting numbers</h1>
      <h2 className='mb-3'>Count: {counts}</h2>
      <button className='btn btn-success' onClick={increaseNumber}>Inrease</button>
      <button className='btn btn-danger ms-3' onClick={decreaseNumber}>Decrease</button>
    </div>
  )
}



export default App;
