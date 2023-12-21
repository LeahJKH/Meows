import React, { useState } from "react";
import style from "./SrcBar.module.css";
import { useTheme } from "../../ThemeContext";
import SearchSvg from "../../assets/Icons/Search";

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
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const inputElement = e.target as HTMLInputElement;
      setSearchTerm(inputElement.value);
    }
  }; //this makes so you can click the enter button on your keyboard and it searches

  const { darkMode } = useTheme();
  const srcbtnCol = darkMode ? style.srcbtndark : style.srcbtn;
  return (
    <div>
      <input
        className={style.searchBar}
        placeholder="Search..."
        type="text"
        value={searchValue}
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
      ></input>

      <button className={srcbtnCol} onClick={handleSearchClick}>
        <SearchSvg />
      </button>
    </div>
  );
};

export default Searchbar;
