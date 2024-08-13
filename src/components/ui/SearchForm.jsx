import React from "react";
import "../anime.css";

const SearchForm = ({ onSearch }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const queryValue = formData.get("query");
    onSearch(queryValue);
  };

  return (
    <form onSubmit={handleSubmit} className="image-search">
      <input
        type="text"
        className="input-01"
        name="query"
        placeholder="Search images..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
