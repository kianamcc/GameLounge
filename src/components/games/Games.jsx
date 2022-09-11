import React from "react";
import "./Games.css";

const Games = (props) => {
  return (
    <div className="games">
      <h2 className="games-header">Games</h2>
      <div className="games-container">
        {props.data.map((game) => {
          return (
            <div className="game-card" key={game.id}>
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
