import TodoItem from "./TodoItem";
import { useState } from "react";

const data = [
  {
    id: 1,
    task: "Suspendisse potenti.",
    status: false,
    due_date: "2023-04-26",
  },
  {
    id: 2,
    task: "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    status: false,
    due_date: "2023-05-08",
  },
  {
    id: 3,
    task: "Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
    status: false,
    due_date: "2023-04-30",
  },
];

/* 
  data = Array<{id:number,task:string,status:boolean, due_date:string}> 

  dataRender = Array[]<TodoItem/>
  */

function TodoLists() {
  const [allTodo, setAllTodo] = useState(data);
  return (
    <>
      {allTodo.map((todoObj) => (
        <TodoItem
          key={todoObj.id}
          task={todoObj.task}
          done={todoObj.status}
          date={todoObj.due_date}
        />
      ))}
    </>
  );
}

export default TodoLists;
