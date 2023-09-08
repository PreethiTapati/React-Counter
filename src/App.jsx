import { useState } from 'react';
import Button from './components/button';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const resetHandler = () => {
    setCount(0);
  };

  const decrementHandler = () => {
    setCount((prevCount) => prevCount - 1);
  };


  const countColor =() => {
    if (count > 0) {
      return 'green';
    }
    else if 
      (count < 0) {
    return 'red'
  } 
   else {
      return 'blue'
   }
    };


  return (
    <div>
      <h1>Counter</h1>
   <h2 className={countColor()}>{count}</h2>
      <Button styling="green" text="+" handleClick={incrementHandler} />
      <Button styling="blue" text="Reset" handleClick={resetHandler} />
      <Button styling="red" text="-" handleClick={decrementHandler} />
    </div>
  );
};

export default App;









