import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import PopularGames from "./components/popular-games/PopularGames";
import mockData from "./data";

function App() {
  // states
  const [data, setData] = useState(mockData);
  console.log(mockData);
  // fetch API

  return (
    <div className="App">
      <Navbar />
      <PopularGames data={data} />
    </div>
  );
}

export default App;
