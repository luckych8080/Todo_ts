import React from "react";
import { ITask } from "./Interfaces";

import { TableRow, TableCell, IconButton } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <TableRow>
      <TableCell align="left">{task.taskName}</TableCell>
      <TableCell align="right">{task.deadLine}</TableCell>
      <TableCell align="right">
        <IconButton
          onClick={() => {
            completeTask(task.taskName);
          }}
        >
          <CancelIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default TodoTask;
