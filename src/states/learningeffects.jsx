import { useEffect, useState } from "react";

function LearningEffects() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(
    function myeffect() {
      console.log("myeffect called");
    },
    [count]
  );

  const increment = () => {
    setCount((c) => c + 1);
  };

  const changedValue = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>+1</button>
      <h1>{name}</h1>
      <input type="text" placeholder="name" onChange={changedValue} />
    </>
  );
}

export default LearningEffects;
