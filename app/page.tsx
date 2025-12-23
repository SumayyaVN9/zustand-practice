
"use client";

import { useCounterStore } from "@/store/useCounterStore";
import  "@/style/home.css"

export default function Home()
{
  const { count, increment,decrement,reset} = useCounterStore();

  return(
    <div className="container">
      <div className="left"><p> Hey, i have <b>{count}</b> Friends</p></div>
      <div className="right">
    {/* <h1>Zustand Counter</h1> */}
     <button onClick={increment}>Add</button>
     <button onClick={decrement}>Remove</button>
     <button onClick={reset}>Reset</button>
     </div>
    </div>
  )
}