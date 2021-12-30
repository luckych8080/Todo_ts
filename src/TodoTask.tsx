import React from "react";
import { ITask } from "./Interfaces";

import { TableRow, TableCell, IconButton } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckIcon from '@mui/icons-material/Check';

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: ITask): void;
  taskCheck: boolean;
}

const TodoTask = ({ task, completeTask, taskCheck }: Props) => {
  return (
    <TableRow>
      <TableCell align="left">{task.taskName}</TableCell>
      <TableCell align="right">{task.deadLine}</TableCell>
      <TableCell align="right">
        <IconButton
          onClick={() => {
            completeTask(task);
          }}
        >
          {taskCheck ? <CancelIcon />: <CheckIcon />}
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default TodoTask;
