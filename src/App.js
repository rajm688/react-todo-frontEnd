import "./App.css";
import * as React from "react";
import Cardcontainer from "./components/Card";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Header from "./components/Header";
import { useState } from "react";

const datas = [
  {
    id: 1,
    text: "Water Plants",
    date: "12th Feb 8.30am",
    reminder: false,
  },
  {
    id: 2,
    text: "Do excersise",
    date: "12th Feb 9.00am",
    reminder: false,
  },
  {
    id: 3,
    text: "Do meditation",
    date: "12th Feb 9.30am",
    reminder: false,
  },
];

function App() {
  const [tasks, setTasks] = useState(datas);

  const Togglereminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="App">
      <Card sx={{ width: "50%", margin: "5% auto", boxShadow: "0 0 5px gray" }}>
        <Header setTasks={setTasks} tasks={tasks} />
        <br />
        <CardContent>
          {tasks.map((task) => (
            <Cardcontainer
              key={tasks.id}
              task={task}
              setTasks={setTasks}
              tasks={tasks}
              Togglereminder={Togglereminder}
            />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
