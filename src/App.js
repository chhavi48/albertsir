// import React from "react";
//  import Counter from './counter/counter'
// import { Task } from "./input/Task";
import {List} from "./components/list/List";
// import "./styles.css";
export default function  App(){
  return (
    <div  style ={{backgroundColor: 'teal'}}className="App">
      {/* <Counter/> */}
      {/* <Task/> */}
      <List/>
    </div>
    // <div className="main_div">
    // <div className="center_main">
    //   <br/>
    //   <input type="text" placeholder="addd a items"/>
    //   <button>+</button>
    //   <ol>
    //     <li></li>
    //   </ol>
    // </div>
    // </div>
  );
}