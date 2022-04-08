import React from "react";
//  import Counter from './counter/counter'
// import { Task } from "./input/Task";
import {List} from "./components/list/List";
// import "./styles.css";
export default function  App(){
  const [isAuth,setIsAuth]=React.useState(false)
  const isError =false;
  const isLoading=false;
  const handlelogin =() =>{
    setIsAuth(true)
  };

 
    return !isAuth ? (
    <div>user is not logged in,plz login 
      <button onClick={handlelogin}>LOGIN</button>

    </div>
    ) : isLoading ? <div>....loading</div>: isError ?
    (<div>someting went wrong</div>):(
      <div className="App">
        <List/>
      </div>
    );
  }
 
  
  
  
  // return (
  //   <div  style ={{backgroundColor: 'teal'}}className="App">
  //     {/* <Counter/> */}
  //     {/* <Task/> */}
  //     <List/>
  //   </div>
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
//   );
// }