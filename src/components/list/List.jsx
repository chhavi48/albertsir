import React from "react";
import {v4 as uuid} from "uuid"
import { Listitmes } from "../Listitme";
function List(){
    const [query,setQuery]=React.useState("");
    const [list,setList]=React.useState([]);
    const handleadd=()=>{
        const payload={
            title:query,
            status:false,
            id:uuid()
        }
        setList([...list,payload])
    };
    const handledel= (id) =>{
         let updatedList =list.filter((item) =>item.id!==id)
         setList(updatedList)
    };
    return(
<>
   <h1>🖊🖊TO-DO APP🖋🧾</h1>
   <div style={{border:"5px solid black",textAlign:"center",backgroundColor: 'blue',height:"600"}}>
       <input 
       value={query}
       onChange={(e) => setQuery(e.target.value)}
       type="text"
       placeholder="add something" />
       <button onClick={handleadd}>ADD</button>
   </div>
   <div>
       {list.length>0 && `count is${list.length}`}
   </div>
   <div>
   {list.map((item)=>
    {
//    (<div key={item.id}>{item.title}</div>
return <Listitmes handledel ={handledel}key={item.id} {...item}/>
   })}
  </div>
</>
    );
}
export {List}