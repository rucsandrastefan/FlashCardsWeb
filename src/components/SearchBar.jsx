import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <div className="w-full flex justify-center pt-4">
      <div className="flex items-center bg-white rounded-full px-2">
        <AiOutlineSearch className="mr-2" />
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="rounded-full py-2 px-4 w-full min-w-64 outline-none "
        />
      </div>
    </div>
  );
}

export default SearchBar;
