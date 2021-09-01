import React, { useState, useEffect, memo } from "react";

function Couter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("lan dauvaf rerenders");
  });
  useEffect(() => {
    console.log("1lan");
    return () => {
      console.log("chay khi component nay willunmout");
    };
  }, []);
  useEffect(() => {
    console.log("lan dau va sau khi count thay doi");
  }, [count]);
console.log("counter");
  return (
    <div>
      <h1>Tinh</h1>
      <p>{count}</p>
      <button className="btn btn-success" onClick={() => setCount(count + 1)}>
        +
      </button>
      {console.log(count)}
    </div>
  );
}

export default memo(Couter);
