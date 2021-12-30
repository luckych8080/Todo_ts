import React, { ChangeEvent, FC, useState } from "react";
// import "./App.css";
import { ITask } from "./Interfaces";
import TodoTask from "./TodoTask";

import {
  Card,
  Paper,
  CardContent,
  CardActions,
  Container,
  TextField,
  Collapse,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";



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
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: "10px" }}>
      <Paper elevation={3}>
        <Card>
          <CardContent
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton aria-label="add" onClick={AddTodoHandler}>
              <AddIcon fontSize="large" />
            </IconButton>
            <TextField
              id="outlined-task-input"
              label="Task"
              type="text"
              name="task"
              value={task}
              onChange={ChangeHandler}
            />
            <TextField
              id="outlined-deadline-input"
              label="Deadline"
              type="number"
              name="deadline"
              value={deadLine}
              onChange={ChangeHandler}
            />
          </CardContent>

          <CardContent  sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <IconButton
              // expand={expanded}
              onClick={handleExpandClick}
              
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardContent>

          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <div className="todoList">
                {todoList.map((task: ITask, key: number) => {
                  return (
                    <TodoTask
                      key={key}
                      task={task}
                      completeTask={CompleteTaskHandler}
                    />
                  );
                })}
              </div>
            </CardContent>
          </Collapse>
        </Card>
      </Paper>
    </Container>
  );
};

export default App;
