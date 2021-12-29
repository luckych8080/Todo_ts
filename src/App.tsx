import React, { ChangeEvent, FC, useState } from "react";
import "./App.css";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadLine, setDeadline] = useState<number>(0);
  const [todo, setTodo] = useState([]);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    //checking element by name 
    if(event.target.name === "task"){
      setTask(event.target.value)
    }else{
      setDeadline(Number(event.target.value))
    }
  };

  

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            name="task"
            placeholder="Task..."
            onChange={changeHandler}
          />
          <input
            type="number"
            name="deadline"
            placeholder="DeadLine (in Days)..."
            onChange={changeHandler}
          />
        </div>
        <button>Add Task</button>
      </div>
      <div className="todoList"></div>
    </div>
  );
};

export default App;
