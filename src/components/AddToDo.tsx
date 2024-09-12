import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";


interface AddToDoProps {
    AddToDo: (todo: string) => void;
    taskCount:number;
}


const AddToDo: React.FC<AddToDoProps> = ({ AddToDo ,taskCount }) => {
    const [value, setValue] = useState<string>("")

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault();
        
        if(value!=='') {
            AddToDo(value)
        }

        setValue('')
    }

    return (
        <form className="AddToDo_div" onSubmit={handleSubmit}>
            <input type="text" placeholder="Add a new task" onChange={(e) => { setValue(e.target.value) }} value={value} />
            <button type="submit" ><FaPlus className="plus_icon" /></button>
            <div className="h2_div">
            <h2>Tasks to do - {taskCount}</h2>
            </div>
        </form>
    )
}

export default AddToDo