import React from 'react';
import { IoMdCheckmark } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";

interface TodoProps {
  text: string;
  completed: boolean;
  onDelete: () => void;
  onComplete: () => void;
}

const ToDo: React.FC<TodoProps> = ({ text, completed, onDelete, onComplete }) => {
  return (
    <div className={`todo ${completed ? 'completed' : ''}`}>
      <h4>{text}</h4>

      <div className='todo_icons_div flex pr-5'>
        <IoMdCheckmark className='todo_icon' onClick={onComplete} />
        <RiDeleteBinLine className='todo_icon' onClick={onDelete} />
      </div>
    </div>
  );
};

export default ToDo;
