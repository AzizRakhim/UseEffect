import React, { useEffect, useState } from 'react'

function Button(props) {
  let [count, setCount] = useState(0);

  useEffect(() => {
    return () => {
      console.log("Will unmount button");
    }
  }, []);

  const addListHandler = () => {
    const randNum = Math.round(Math.random() * 10);
    props.clicked([...props.arr, randNum]);
    setCount(count + 1);
  }

  return (
    <button onClick={addListHandler} className={props.className}>
      Click me {count}
    </button>
  )
}

export default Button
