import { useState, useEffect } from "react";
import { COUNTRIES } from "../Constants";

const AutoSuggestion = ({ searchText }) => {
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    const list = COUNTRIES.filter((country) =>
      country.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredCountries(list);
  }, [searchText]);

  const highlightText = (country) => {
    const parts = country.split(new RegExp(`(${searchText})`, "gi"));

    return parts.map((part, index) =>
      part.toLowerCase() === searchText.toLowerCase()
        ? <strong key={index}>{part}</strong>
        : part
    );
  };

  if (filteredCountries.length === 0)
    return <h2>No Matches Found</h2>;

  return (
    <div id="filtered-list">
      {filteredCountries.map((country, index) => (
        <div key={country + index}>
          {highlightText(country)}
        </div>
      ))}
    </div>
  );
};

export default AutoSuggestion;
