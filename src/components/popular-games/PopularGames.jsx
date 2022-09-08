import React from "react";
import "./PopularGames.css";
import liquid from "../../assets/liquid.jpeg";

const PopularGames = (props) => {
  return (
    <div className="popular-games">
      <h2 className="popular-games-header">Popular Games</h2>
      <div className="popular-games-card-container">
        {props.data.map((game) => {
          return (
            <div className="popular-game-card" key={game.id}>
              <img src={liquid} alt="" className="popular-game-img" />
              <h3 className="popular-game-name">{game.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularGames;
