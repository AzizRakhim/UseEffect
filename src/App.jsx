import React, { useEffect, useState } from 'react';
import "./App.css";
import Button from './Button';
import Users from './Users';
import UsersTwo from './UsersTwo';

let arrList = [1, 2, 3];

function App() {

  // useEffect part 1
  
  let [count, setCount] = useState(1);
  let [bool, setBool] =  useState(true);
  let [arr, setArr] = useState(arrList);
  let [newArr, setNewArr] = useState([]);

  useEffect(() => {
    console.log("Did mount");
    setNewArr(arr);
  }, []);

  useEffect(() => {
    console.log("Did update");
    setBool(!bool); 
  }, [count, arr]);

  useEffect(() => {
    console.log("Did mount");
    return () => {
      console.log("Will unmount");
    }
  }, []);

  const addedArr = () => {
    setArr([...arr, 1]);
  }

  // useEffect part 1
  // useEffect part 2

  let [value, setValue] = useState({
    email : "",
    password : ""
  });

  let [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  function handleChange(e) {
    if(e.target.type === "password"){
      setValue({
        ...value,
        password : e.target.value
      })
    } else {
      setValue({
        ...value,
        email : e.target.value
      })
    }
  }

  // useEffect part 2
  // useEffect part 3

  let [dataTwo, setDataTwo] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then(res => res.json())
      .then(data => setDataTwo(data.data));
  }, []);

  return (
    <div className={`App ${bool ? "bg-dark" : "bg-primary"}`}>

      {/* useEffect part 1 */}

      {bool && <Button 
        clicked={setArr} 
        arr={arr}
        className='btn btn-primary mt-3' 
      />}
      <h1 onClick={() => setCount(count + 1)}>
        Hello React {count}
      </h1>
      <ul className="list-group">
        {newArr.map((el, i) => (
          <li className="list-group-item" key={i}>
            {el}
          </li>
        ))}
      </ul>
      <button onClick={addedArr}>
        Click me
      </button>

      {/* useEffect part 1 */}
      {/* useEffect part 2 */}

      <h1>
        Hello React
      </h1>
      <input 
        type="email" 
        name="email" 
        value={value.email}
        onChange={handleChange}
      />
      <input 
        type="password"
        name="password" 
        value={value.password}
        onChange={handleChange}
      />
      {
        data.map((user, index) => (
          <Users item={user} key={index} />
        ))
      }

      {/* useEffect part 2 */}
      {/* useEffect part 3 */}

      {
        dataTwo.map((user, index) => (
          <UsersTwo item={user} key={index} />
        ))
      }
    </div>
  )
}

export default App;
