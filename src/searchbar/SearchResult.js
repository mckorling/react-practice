import './SearchBar.css'

const SearchResult = ({ result }) => {
  return (
    <div className="search-result" onClick={(e) => alert(`You clicked ${result.name}`)}>{result.name}</div>
  )
}

export default SearchResult;