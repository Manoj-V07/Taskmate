import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { Showtask } from "./components/Showtask";
import { Footer } from "./components/Footer";

import './App.css';

function App() {
  const [tasklist,setTasklist]= useState(JSON.parse(localStorage.getItem("tasklist")) || []);
 const [task, setTask] = useState({});
 useEffect(() => {
  localStorage.setItem("tasklist",JSON.stringify(tasklist))
 } , [tasklist]);
  return (
    <div className="App">
      <Header />
      <div className="marquee">
      <p>This Web Page Was Created By "Manoj.V" using React Js</p>
     </div>
      <AddTask 
        tasklist={tasklist} 
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />
      <Showtask 
        tasklist={tasklist} 
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />
      <Footer />
    </div>
  );
}

export default App;
