import React from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DarkMode from "./utilities/darkmode/DarkMode";

function App() {
  return (
    <div className="app">
      <nav>
        <DarkMode />
      </nav>
      <h1>test</h1>
    </div>
  );
}

export default App;
