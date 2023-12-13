import { useState } from "react"
import { ListaTareas } from "./ListaTareas"

export const TodoApp = ()=>{
    const [newTask,setNewTask]=useState<string>("")
    const [list, setList] = useState<string[]>([])
    const handleAddTask=()=>{
        if(newTask.trim()===""){
            return 
        } else {
            setList(prev=>[...prev, newTask])
            setNewTask("")
        }
    }
    const handleBorrarTarea=(index:number)=>{
        setList(tareas=>tareas.filter((_,i)=>i!==index))
    }
    return(
    <>
        <h1>Todo APP</h1>
        <div className="flex">
            <input type="text" value={newTask} onChange={(e)=>{setNewTask(e.target.value)}} placeholder="Nueva Tarea" />
            <button onClick={handleAddTask}>Add</button>
        </div>
        <ListaTareas listaTareas={list} borrarTarea={handleBorrarTarea}></ListaTareas>
    </> 

    )
}