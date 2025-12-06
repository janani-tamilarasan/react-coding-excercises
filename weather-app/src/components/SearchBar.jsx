import {useState} from 'react'

const SearchBar = ({ showByCity }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    if (!searchText.trim()) return;
    showByCity(searchText);
    setSearchText('');
  };

  return (
    <div>
      <label>Search: </label>
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
