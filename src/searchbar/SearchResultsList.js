import './SearchBar.css'
import SearchResult from './SearchResult'

const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((item, id) => {
        return <SearchResult result={item} key={id} />
      })}
    </div>
  )
}

export default SearchResultsList;