import './App.css';
import Header from "./components/Header";
import Catalog from "./components/Catalog";
import React from "react";
import WeekendGame from "./components/WeekendGame";
import Weekend from "./components/Weekend";

function App() {
  return (
    <div className="App">
      <Header/>
        <Weekend/>
        <Catalog/>
    </div>
  );
}

export default App;
