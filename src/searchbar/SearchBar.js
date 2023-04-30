import '../searchbar/SearchBar.css'
import { FaSearch } from 'react-icons/fa'
import { useState } from 'react'

const SearchBar = ({setResults}) => {
  const [input, setInput] = useState('');

  const fetchData = async (searchText) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    // console.log(data);
    const results = data.filter((item) => {
      return searchText && item && item.name && item.name.toLowerCase().includes(searchText)
    });
    setResults(results);
  }

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  }

  return (
    <div className='input-wrapper'>
      <FaSearch id="search-icon"></FaSearch>
      <input placeholder='Type to search...' value={input} onChange={(e) => handleChange(e.target.value)}></input>
    </div>
  )
}

export default SearchBar;

// tutorial: https://github.com/CodeCompleteYT/react-search-bar/tree/main/src