import React, {useRef} from "react";
import {MdDelete} from 'react-icons/md';
import '../App.css';

function Todo(props) {    
    const input=useRef();
    const handleDelete=(id)=> {
        let tasks=props.tasks.filter(item => {
            return item.id!==id;
        })
        props.setTasks(tasks);  
    }
    const handleComplete=(e)=>{
        e.target.classList.toggle('complete')
    }
    return(
        <div className="todo">
                <div>
                    {props.tasks.map((e)=>{return <p className="todo-row" key={e.id} onClick={handleComplete} ref={input}><p>{e.text}</p><span className="icons"><MdDelete className="delete-icon" onClick={()=>handleDelete(e.id)}/></span></p>})}
                </div>
        </div>
    )
}

export default Todo;