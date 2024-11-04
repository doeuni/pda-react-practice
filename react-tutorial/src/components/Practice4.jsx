import { useState, useEffect } from 'react';

export default function Practice4() {
  const [count, setCount] = useState(0); //현재타이머값 0부터시작
  const [timer, setTimer] = useState();

  const start = () => {
    
  }
  const stop = () => {
    
  }
  const reset = () => {
    
  }
   useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={}>1</button>
    </div>
  );
}
