import React, { useState } from "react";
import styles from "../NavBar/NavBar.module.css";
interface SearchbarProps {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
} // This sets the search term in a variable we can drag out later

const Searchbar = ({ setSearchTerm }: SearchbarProps) => {
  const [searchValue, setSearchValue] = useState(""); //this either switches from empty or a word

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }; // this reads the letters put in the input field

  const handleSearchClick = () => {
    setSearchTerm(searchValue);
  }; //this makes so you can click the button and it searches

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSearchTerm(searchValue);
    }
  }; //this makes so you can click the enter button on your keyboard and it searches

  return (
    <div>
      <input
        type="text"
        value={searchValue}
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
      />
      <button className={styles.searchButton} onClick={handleSearchClick}>
        Search
      </button>
    </div>
  );
};

export default Searchbar;
