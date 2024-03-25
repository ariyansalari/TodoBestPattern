/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo, useEffect } from "react";

interface Props {
    id:number;
    task:string;
    handleDelete:any;
}
const Task:React.FC<Props> =({handleDelete,id,task})=>{
useEffect(()=>{
    console.log('Rendering <Task/>');
    
})
return (
    <li>{task} <button onClick={()=>handleDelete(id)}>X</button></li>
)
}
export default memo(Task)