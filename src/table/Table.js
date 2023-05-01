import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs'
import './table.css'


// https://www.youtube.com/watch?v=MINQoCSBmds
const Table = ({rows, handleDeleteRow, editRow}) => {
  return (
    <div className="table-app table-wrapper">
      <table className='table'>
        <thead>
          <tr>
            <th>Page</th>
            <th className='expand'>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => {
            const statusText = row.status[0].toUpperCase() + row.status.slice(1);
            return (
              <tr key={index}>
                <td>{row.page}</td>
                <td className='expand'>{row.description}</td>
                <td><span className={`label label-${row.status}`}>{statusText}</span></td>
                <td><span className='actions'>
                  <BsFillTrashFill className='delete-btn' onClick={() => handleDeleteRow(index)}></BsFillTrashFill>
                  <BsFillPencilFill onClick={() => editRow(index)}></BsFillPencilFill>
                </span></td>
              </tr>
            )
          })}
          {/* <tr>
            <td>Home</td>
            <td>This is the main page</td>
            <td><span className='label label-live'>Live</span></td>
            <td><span className='actions'>
              <BsFillTrashFill className='delete-btn'></BsFillTrashFill>
              <BsFillPencilFill></BsFillPencilFill>
            </span></td>
          </tr>
          <tr>
            <td>Page 2</td>
            <td>This is the second page</td>
            <td><span className='label label-draft'>Draft</span></td>
            <td><span className='actions'>
              <BsFillTrashFill className='delete-btn'></BsFillTrashFill>
              <BsFillPencilFill></BsFillPencilFill>
            </span></td>
          </tr>
          <tr>
            <td>Page 3</td>
            <td>This is the third page</td>
            <td><span className='label label-error'>Error</span></td>
            <td><span className='actions'>
              <BsFillTrashFill className='delete-btn'></BsFillTrashFill>
              <BsFillPencilFill></BsFillPencilFill>
            </span></td>
          </tr> */}
        </tbody>
      </table>
    </div>
  )
}

export default Table;