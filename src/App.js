import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import Scoreboard from "./components/Scoreboard";
//import LightSwitch from "./components/LightSwitch";
function App() {
  return (
    <div className="App">
      <main>
        <Title a="Scoreboard App " />
        <Scoreboard />
        {/* <LightSwitch s="sampath garu" /> */}
      </main>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
