import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import AddTask from "./AddTask";
function Header({ setTasks, tasks }) {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: "30px",
        }}
      >
        <Typography variant="h4" component="div">
          ToDo Task
        </Typography>
        <Button
          onClick={() => {
            setToggle(!toggle);
          }}
          variant="contained"
          color={!toggle ? "success" : "warning"}
        >
          {!toggle ? "ADD TASK" : "CLOSE"}
        </Button>
      </div>
      {toggle && <AddTask setTasks={setTasks} tasks={tasks} />}
    </>
  );
}

export default Header;
