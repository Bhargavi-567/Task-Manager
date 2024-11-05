import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskManager from "./TaskManage";
import TaskDetails from "./taskdetails";

const App = () => {
  return (
    <Router>  
      <Routes>
        <Route path="/" element={<TaskManager />} />
        <Route path="/taskdetail/:id" element={<TaskDetails />} /> 
      </Routes>
    </Router>
  );
};

export default App;
