import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import PopularGames from "./components/popular-games/PopularGames";
import Games from "./components/games/Games";
import mockData from "./data";
import mockData2 from "./data2";
import axios from "axios";

function App() {
  // states
  const [data, setData] = useState(mockData);
  console.log(mockData);

  // fetch API
  // useEffect(() => {
  //   axios
  //     .get(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}`)
  //     .then((res) => {
  //       console.log(res.data.results); // get game, 20 games per page
  //       console.log("res", res.data.next); // get next page
  //     })
  //     .catch((err) => err);
  // }, []);

  return (
    <div className="App">
      <Navbar />
      <PopularGames data={data} />
      <Games data={mockData2} />
    </div>
  );
}

export default App;
