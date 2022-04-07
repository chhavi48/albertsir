import React from "react"


 export default function Counter() {
  const [counter,setCounter]=React.useState(5)
  const handleIncrement =(value) =>{
    setCounter(counter+value)
  }
  console.log('updated',counter)
  return (
    <>
     <h1>hello react bhaiya i am here</h1>
     <p>lets start to see magic</p>
     <h2>counter</h2>
     <h2>{counter}</h2>
     <button onClick={() => handleIncrement(1)} >ADD</button>
     <button onClick={() => handleIncrement(-1)} >REMOVE</button>
  </>
  );
}

