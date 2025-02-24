import React, { useState } from "react";
const User = (props) => {
  let [count, setCount] = useState(0);
  return (
    <div className="user-card">
      <h2>Name: {props.name}</h2>
      <h2>count:{count}</h2>
      <button onClick={() => setCount(count + 1)}>count➕</button>
      <br></br>
      <button onClick={() => setCount(count - 1)}>count➖</button>
      <br></br>
      <button onClick={() => setCount(0)}>Reset</button>
      <h2>This is fuctional componet</h2>
    </div>
  );
};
export default User;
