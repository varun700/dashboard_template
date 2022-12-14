import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import { Sidebar } from "./Layout";
function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Sidebar />
      </div>
      <div className="main"></div>
    </div>
  );
}

export default App;
