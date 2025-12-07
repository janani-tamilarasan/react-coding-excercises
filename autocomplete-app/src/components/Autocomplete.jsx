import { useState } from "react";
import AutoSuggestion from "./AutoSuggestion";

const Autocomplete = () => {
  const [searchText, setSearchText] = useState("");

  const handleChangeSearch = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div id="autocomplete-app">
      <input
        type="text"
        value={searchText}
        onChange={handleChangeSearch}
        placeholder="Search a country..."
      />

      {/* Show suggestion only when text exists */}
      {searchText.trim() !== "" && (
        <AutoSuggestion searchText={searchText} />
      )}
    </div>
  );
};

export default Autocomplete;
