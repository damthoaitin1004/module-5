import { useState } from 'react';
import useIncrement from './useIncrement';
function CounterOne() {
    const [count,increase] = useIncrement(1);
  
    return (
        <div>
        Count 1: {count}
        <div>
          <button onClick={increase}>Add 1</button>
        </div>
      </div>
  
    );
}
export default CounterOne;