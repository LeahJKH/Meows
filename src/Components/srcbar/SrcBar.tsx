import React, { useState } from "react";

interface SearchbarProps {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const Searchbar = ({ setSearchTerm }: SearchbarProps) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearchClick = () => {
    setSearchTerm(searchValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSearchTerm(searchValue);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchValue}
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default Searchbar;