const Pagination = ({ currentPage, nPages, setCurrPage}) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
  const handlePrevPage = () => {
    if (currentPage !== 1) setCurrPage(currentPage - 1);
  }
  const handleNextPage = () => {
    if (currentPage !== nPages) setCurrPage(currentPage + 1);
  }
  return (
    <div>
      <ul>
        <li>
          <button onClick={handlePrevPage}>Previous</button>
        </li>
        {pageNumbers.map((n, index) => {
          return (
            <li key={index}>
              <button onClick={() => setCurrPage(n)}>{n}</button>
            </li>
          )
        })}
        <li>
          <button onClick={handleNextPage}>Next</button>
        </li>
      </ul>
    </div>
  )

}

export default Pagination;