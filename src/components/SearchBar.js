import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ formSubmit }) => {
  const [term, setTerm] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    formSubmit(term);
  };
  const handleChange = (event) => {
    setTerm(event.target.value);
  };
  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Image Search</label>
        <input type="text" value={term} onChange={handleChange} />
      </form>
    </div>
  );
};

export default SearchBar;
