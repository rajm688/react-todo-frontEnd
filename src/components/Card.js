import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import HighlightOffTwoToneIcon from "@mui/icons-material/HighlightOffTwoTone";
import { IconButton } from "@mui/material";
function Cardcontainer({ task, tasks, setTasks, Togglereminder }) {
  return (
    <Card
      onDoubleClick={() => Togglereminder(task.id)}
      style={{
        width: "90%",
        margin: "5px auto",
        boxShadow: "0 0 5px gray",
        borderLeft: task.reminder == true ? "solid 6px green" : "",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <Typography variant="h5" component="div">
            {task.text}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {task.date}
          </Typography>
        </div>
        <div>
          <IconButton
            onClick={() => {
              const remTask = tasks.filter((curtask) => curtask.id !== task.id);
              setTasks(remTask);
            }}
          >
            <HighlightOffTwoToneIcon style={{ color: "red" }} />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
}

export default Cardcontainer;
