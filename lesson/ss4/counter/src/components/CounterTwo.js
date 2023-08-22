import { useState } from "react";
import useIncrement from "./useIncrement";
function CounterTwo() {
    const [count,increase] = useIncrement(2);
  
    return (
        <div>
        Count 2: {count}
        <div>
          <button onClick={increase}>Add 2</button>
        </div>
      </div>
  
    );
}
export default CounterTwo;