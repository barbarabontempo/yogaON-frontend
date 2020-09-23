import React from "react";

const Search = (props) => {
  // console.log(props)
  const onSearchChange = (e) => {
    props.handleSearchChange(e.target.value);
  };

  return (
    <form className="search">
      <input
        type="text"
        placeholder="Search poses..."
        value={props.searchTerm}
        onChange={onSearchChange}
      />
      <input type="submit" value="🔍" />
    </form>
  );
};

export default Search;
