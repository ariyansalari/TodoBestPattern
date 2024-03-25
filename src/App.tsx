import { useCallback, useEffect, useMemo, useState } from "react"
import List from "./List"

const initialTodos=[
  {id:1,task:"Go shopping"},
  {id:2,task:"Pay the electricity"}
]
function App() {
const [todoList,setTodoList]=useState(initialTodos)
const [task,setTask]=useState('')
const [term,setTerm]=useState('')
const printTodoList=useCallback(()=>{
console.log('Changing todoList',todoList);

},[todoList])
useEffect(()=>{
 console.log('Rendering <App/>');
  
})
useEffect(()=>{
printTodoList()
},[todoList,printTodoList])
const handleCreate =()=>{
  const newTodo ={
    id:Date.now(),
    task
  }
  setTodoList([...todoList,newTodo])
  setTask('')
}

const handleSearch =()=>{
  setTerm(task)
}
const handleDelete =useCallback((taskId:number)=>{
const newTodoList =todoList.filter((todo)=>todo.id!==taskId)
setTodoList(newTodoList)

},[todoList])

const filteredTodoList =useMemo(()=>todoList.filter((todo)=>{
  console.log('filtering');
  return todo.task.toLowerCase().includes(term.toLowerCase())
  
}),[term,todoList])
  return (
   <div>
    <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} />
    <button onClick={handleCreate}>Create</button>
    <button onClick={handleSearch}>Search</button>

    <List todoList={filteredTodoList} handleDelete={handleDelete}/>
   </div>
  )
}

export default App
