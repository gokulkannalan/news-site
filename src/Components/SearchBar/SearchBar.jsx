import React from "react";

function SearchBar() {
  return (
    <form class="form-inline">
      <input
        class="form-control mr-sm-2 input"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button
        class="btn btn-outline-danger my-2 my-sm-0 search-btn"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
