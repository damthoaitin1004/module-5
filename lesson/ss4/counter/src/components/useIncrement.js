import { useState } from "react";
const useIncrement = (addAmount)=>{
    const[count,setCount] = useState(0);
    const increase=() =>{
       let newCount = count + addAmount;
       setCount(newCount);
    }
    return[count,increase]
}
export default useIncrement;