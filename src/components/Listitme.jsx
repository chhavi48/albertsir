import React from "react";
function Listitmes({title,id,status,handledel}){
    const handledelfn =() =>{
        handledel(id)
    }
    return (
       
        <div style={{border:"5px solid red",margin:"10",padding:5,textAlign:"center"}}>
            <h3>{title}</h3>
            <button onClick={handledelfn}>Delete</button>
        </div>
    )
}
export {Listitmes}