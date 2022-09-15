import { React, useState } from "react";
import "./SearchBar.css";

/* Get user input from search bar */

const SearchBar = (props) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input-box"
        placeholder="search games"
        onChange={props.getUserInput}
      />
    </div>
  );
};

export default SearchBar;
