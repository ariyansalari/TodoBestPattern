import { memo, useEffect } from "react";
import Task from "./Task";

/* eslint-disable @typescript-eslint/no-explicit-any */
export type Todo ={
    id:number;
    task:string;
}
interface Props {
    todoList :Todo[]
    handleDelete:any
}
const List :React.FC<Props> = ({handleDelete,todoList})=>{
    useEffect(()=>{
        console.log('rendering <List/>');
        
    })

return (
    <ul style={{listStyle:"none"}}>
        {
            todoList.map((item)=>(
                <Task key={item.id} id={item.id} task={item.task} handleDelete={handleDelete} />
            ))
        }
    </ul>
)
}

export default memo(List)