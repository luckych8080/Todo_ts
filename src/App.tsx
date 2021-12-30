import React, { ChangeEvent, FC, useState } from "react";

import { ITask } from "./Interfaces";
import TodoTask from "./TodoTask";

import {
  Card,
  Paper,
  CardContent,
  Container,
  TextField,
  Collapse,
  TableBody,
  Table,
  TableHead,
  IconButton,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadLine, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);
  const [completedTodoList, setCompletedTodoList] = useState<ITask[]>([]);

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

  const CompleteTaskHandler = (taskToDelete: ITask): void => {
    // delete a task
    console.log(taskToDelete);
    const newTask = {
      taskName: taskToDelete.taskName,
      deadLine: taskToDelete.deadLine,
    };

    setCompletedTodoList([...completedTodoList, newTask]);

    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== taskToDelete.taskName;
      })
    );
  };

  const DisableTaskHandler = (taskNameToDelete: ITask): void => {
    setCompletedTodoList(
      completedTodoList.filter((task) => {
        return task.taskName !== taskNameToDelete.taskName;
      })
    );
  };

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  let styles = { backgroundColor: "grey" };

  return (
    <Container maxWidth="md" sx={{ marginTop: "10px" }}>
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
          <CardContent>
            <Table sx={{ minWidth: "100%" }} aria-label="customized table">
              <TableHead></TableHead>
              <TableBody>
                {todoList.map((task: ITask, key: number) => {
                  return (
                    <TodoTask
                      key={key}
                      task={task}
                      completeTask={CompleteTaskHandler}
                      taskCheck={false}
                    />
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>

          <CardContent
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton onClick={handleExpandClick} aria-label="show more">
              <ExpandMoreIcon />
            </IconButton>
          </CardContent>

          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Table sx={{ minWidth: "100%" }} aria-label="customized table">
                <TableHead></TableHead>
                <TableBody style={styles}>
                  {completedTodoList.map((task: ITask, key: number) => {
                    return (
                      <TodoTask
                        key={key}
                        task={task}
                        completeTask={DisableTaskHandler}
                        taskCheck={true}
                      />
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Collapse>
        </Card>
      </Paper>
    </Container>
  );
};

export default App;
