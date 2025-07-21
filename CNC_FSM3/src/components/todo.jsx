import React,{useState} from 'react'
import style from './todo.module.css'

const Todo=()=>{
    const [task,setTask]=useState("")
    const [todos,setTodos]=useState([])

    const add=()=>{
        if(task.trim()){
            setTodos([...todos,task])
            setTask('')
        }
    }

    const del=(e)=>{
        const newTodo=todos.filter((_,i)=>i!==e)
        setTodos(newTodo)
        setTask('')
    }

    const edit=(e)=>{
        setTask(todos[e])
        todos.splice(e,1)
    }
    return(
        <div className={style.container}>
            <h1 className={style.title}>Todo List</h1>
            <input
                placeholder='enter task'
                type='text'
                id='inp'
                value={task}
                onChange={(e)=>setTask(e.target.value)}
            />

            <button onClick={add}>Add</button>

            <ul className={style.list}>
                {todos.map((t,index)=>(
                    <li key={index} className={style.todoItem}>
                        {t}
                        <button  onClick={()=>del(index)}>delete</button> 
                        <button  onClick={()=>edit(index)}>edit</button> 
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todo