import { useState, useEffect } from "react";
import Pagination from "./Pagination";

const RecordsTable = () => {
  const [records, setRecords] = useState([]);
  // const [loading, setLoading] = useState(true);

  const fetchRecords = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    const data = await response.json();
    setRecords(data);
    // setLoading(false)
  }

  const [currPage, setCurrPage] = useState(1);
  const [recordsPerPage] = useState(10);

  const indexOfLastRecord = currPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currRecords = records.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(records.length / recordsPerPage); // total number of pages needed

  useEffect(() => {
    fetchRecords();
  })

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Record ID</th>
            <th>Album Title</th>
          </tr>
        </thead>
        <tbody>
          {currRecords.map((record, index) => {
            return (
              <tr>
                <td>{record.userId}</td>
                <td>{record.id}</td>
                <td>{record.title}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <Pagination currentPage={currPage} nPages={nPages} setCurrPage={setCurrPage} />
    </div>
  )
}

export default RecordsTable;