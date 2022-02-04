import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, Card, CardContent } from "@mui/material";
function AddTask({ setTasks, tasks }) {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  return (
    <Card>
      <CardContent>
        <TextField
          fullWidth
          required
          id="outlined-required"
          label="Enter the Task"
          defaultValue={text}
          onChange={(e) => setText(e.target.value)}
        />
        <br />
        <br />
        <TextField
          fullWidth
          required
          id="outlined-required"
          label="Date and Time"
          defaultValue={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <br />
        <br />
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          onClick={() => {
            const id = Math.floor(Math.random() * 10000) + 1;
            const newTask = {
              id: id,
              text: text,
              date: date,
              reminder: false,
            };
            setTasks([...tasks, newTask]);
          }}
        >
          Submit
        </Button>
      </CardContent>
    </Card>
  );
}

export default AddTask;
