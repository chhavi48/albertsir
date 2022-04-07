import React from 'react'
function Task()
{
    const [query,setQuery]=React.useState("");
    const [tasks,setTasks]=React.useState([])
    const handleChange =  (e) =>{
        // console.log(e.target,e.target.value)
        const {value} =e.target;
        setQuery(value)
    }
    const handleAdd = () =>{
        const payload ={
            title:query,
            status:false

        }
        let newTask = [...tasks,payload]
        setTasks(newTask)
    }

    console.log(tasks)
 const handleremove = () =>{
     
        const payload ={

            title:query,
            status:false

        }
        let newTask = [...tasks,payload]
        setTasks(newTask)
    }
    
    return (
     <div>
         <h1>Tasks</h1>
     
     <div>
       <input value={query} onChange={handleChange} placeholder='add something'/>
    <button onClick={handleAdd}>ADD</button>
     <button onClick={handleremove}>Remove</button>
     </div>
     <div>
         {tasks.map(item =>{
             return <div>{item.title}</div>
         })}
     </div>
     </div>
    );
}
export {Task}