import React, { useState } from "react";
import Couter from "./Counter/Couter";

export default function DemoHook() {
  const [show, setShow ] = useState(true);
  const [num,setNum]=useState(0)
console.log("demohook");
  return (
    <div>
      DemoHook <br />
      {num}
      <button onClick={()=>setNum(Math.random())}>RANDOM</button>
      <button className="btn btn-danger" onClick={() => setShow(false)}>
        REMOVE
      </button>
      {show && <Couter />}
    </div>
  );
}
