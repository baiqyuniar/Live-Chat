import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Client from "./Client";
import Admin from "./Admin";
import Dashboard from "./Dashboard";
const App = () => {
  return (
    <Router>
      <Dashboard />
      <Routes>
        <Route exact path="/" element={<Client />} />
        <Route path="/agent" element={<Admin />} />
      </Routes>
    </Router>
  );
};
export default App;
