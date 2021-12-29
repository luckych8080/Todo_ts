import React, { ChangeEvent, FC, useState } from "react";
import "./App.css";
import { ITask } from "./Interfaces";
import TodoTask from "./TodoTask";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadLine, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const ChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    //checking element by name & assigning value
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const AddTodoHandler = (): void => {
    // adding tasks
    const newTask = { taskName: task, deadLine: deadLine };
    setTodoList([...todoList, newTask]);
    // can add pervious medthod on setTodoList that is useful
    setTask("");
    setDeadline(0);
  };

  const CompleteTaskHandler = (taskNameToDelete: string): void => {
    // delete a task
    setTodoList(todoList.filter((task) => {
      return task.taskName !== taskNameToDelete
    }))
  }


  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            name="task"
            placeholder="Task..."
            value={task}
            onChange={ChangeHandler}
          />
          <input
            type="number"
            name="deadline"
            placeholder="DeadLine (in Days)..."
            value={deadLine}
            onChange={ChangeHandler}
          />
        </div>
        <button onClick={AddTodoHandler}>Add Task</button>
      </div>
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={CompleteTaskHandler} />;
        })}
      </div>
    </div>
  );
};

export default App;
