import React, { useState } from "react";
import AddToDo from "./AddToDo";
import { v4 as uuidv4 } from "uuid";
import ToDo from "./ToDo";

type Todo = {
  id: string;
  task: string;
  completed: boolean;
  isEditing: boolean;
};

const Background = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addToDo = (todo: string) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const deleteToDo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="form_div">
      <AddToDo AddToDo={addToDo} taskCount={todos.length} />
      <div className="todo_div">
        {todos.map((todo) => (
          <ToDo
            key={todo.id}
            text={todo.task}
            completed={todo.completed}
            onDelete={() => deleteToDo(todo.id)}
            onComplete={() => toggleComplete(todo.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Background;
