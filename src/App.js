import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import PopularGames from "./components/popular-games/PopularGames";
import Games from "./components/games/Games";
import SearchBar from "./components/search-bar/SearchBar";
import axios from "axios";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  // states
  const [data, setData] = useState([{}]);
  const [userInput, setUserInput] = useState("");

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

  useEffect(() => {
    // get data from backend
    axios
      .get("/api")
      .then((response) => {
        console.log("frontend recieved data: ", response);
        setData(response.data.data);
      })
      .catch((err) => err);
  }, []);

  const getUserInput = (event) => {
    console.log(event.target.value);
    setUserInput(event.target.value);
  };

  return (
    <div className="App">
      {console.log("d", data)}
      {/* {typeof backendData.data === "undefined" ? (
        <p>loading...</p>
      ) : (
        backendData.data.map((user) => {
          return <p className="backend">{user.name}</p>;
        })
      )} */}
      <Router>
        <Navbar />
        <PopularGames data={data} />
        <SearchBar getUserInput={getUserInput} />
        <Games data={data} userInput={userInput} />
      </Router>
    </div>
  );
}

export default App;
