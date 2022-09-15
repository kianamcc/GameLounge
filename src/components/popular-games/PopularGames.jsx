import React from "react";
import "./PopularGames.css";
import liquid from "../../assets/liquid.jpeg";

const PopularGames = (props) => {
  return (
    <div className="popular-games">
      <h2 className="popular-games-header">Popular Right Now</h2>
      <div className="popular-games-card-container">
        {props.data.map((game) => {
          return (
            <div className="popular-game-card" key={parseInt(game.id)}>
              <img
                src={game.background_image}
                alt=""
                className="popular-game-img"
              />
              <h3 className="popular-game-name">{game.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularGames;
