import React, { useState, useEffect } from "react";
import Task from "./Task";

const Home = () => {
  let current = new Date();
  let date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  const bodyStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0 10vw",
    backgroundColor: "#B784B7",
  };
  const initialArr = localStorage.getItem("tasks")?JSON.parse(localStorage.getItem('tasks')):[];

  const [tasks, setTasks] = useState(initialArr);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const clickHandler = (e) => {
    if(title!=""){
    setTasks([...tasks, { title, description }]);
    }else{
      alert("Please enter task and description");
    }
    setTitle("");
    setDescription("");
  };

  const deleteTask = (index)=>{
    const filteredArray = tasks.filter((val, i)=>{
      return i!== index;
    })
    setTasks(filteredArray);
  }

  useEffect(() => {
    localStorage.setItem('tasks',JSON.stringify(tasks));
    }
  , [tasks]);
  
  
  return (
    <div className="b">
    <div className="body" style={bodyStyle}>
      <h1 style={{ fontFamily: "cursive", padding:30}}>Daily Goals - {date}</h1>
      <div className="but">
        <input
          className="input"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="input"
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={clickHandler} id="add-but">
          ADD
        </button>

        {tasks.map((i, index) => (
          
        <Task key={index} title={i.title} description={i.description} deleteTask ={deleteTask} index={index} />
        ))
}
      </div>
    </div>
    </div>
  );
};

export default Home;
