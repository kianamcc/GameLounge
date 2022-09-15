import React from "react";
import "./Games.css";

/* Displays a gallery of games. */
const Games = (props) => {
  const filteredGames = props.data.filter((game) => {
    if (props.userInput === "") {
      // empty default, return everything as is
      return game;
    } else if (
      game.name.toLowerCase().includes(props.userInput.toLowerCase())
    ) {
      // if game's name matches with user search input, return that game
      return game;
    }
  });

  return (
    <div className="games">
      <h2 className="games-header">Game Gallery</h2>
      <div className="games-container">
        {filteredGames.map((game) => {
          // map over filtered list
          return (
            <div className="game-card" key={parseInt(game.id)}>
              <img src={game.background_image} alt="" className="game-img" />
              <h3 className="game-name">{game.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Games;
