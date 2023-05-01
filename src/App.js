import { useState } from 'react';
import './App.css';
import Table from './table/Table';
import Modal from './table/Modal';
import RecordsTable from './pagination/RecordsTable';
// import Card from './cardscroll/Card';
// import CardListInfinite from './cardscroll/CardListInfinite';
// import { SkeletonTheme } from 'react-loading-skeleton';
// // import Carousel from './imagecarousel/Carousel';
// import slides from '../src/imagecarousel/data/carouselData.json'
// import Clock from './Clock';
// import CountrySelect from './CountrySelect';
// import CreateAppForm from './CreateForm';
// import PokeDex from './PokeDex';
// import ToDo from './ToDo';
// import TrafficLight from './TrafficLight';
// import SearchBar from './searchbar/SearchBar';
// import SearchResultsList from './searchbar/SearchResultsList';

function App() {
  // const [results, setResults] = useState([]); // search bar
  // const [modalOpen, setModalOpen] = useState(false);
  // const [rows, setRows] = useState([
  //   { page: "Page 1", description: "This is the first page", status: "live" },
  //   { page: "Page 2", description: "This is the first page", status: "draft" },
  //   { page: "Page 3", description: "This is the first page", status: "error" }
  // ]);
  // const [rowToEdit, setRowToEdit] = useState(null);
  // const handleDeleteRow = (targetIndex) => {
  //   setRows(rows.filter((_, index) => index !== targetIndex));
  // }
  // const handleSubmit = (newRow) => {
  //   // handle adding a new row, or, handling updating only the edited row
  //   rowToEdit === null ? setRows([...rows, newRow]) : setRows(rows.map((row, index) => {
  //     if (index !== rowToEdit) return row;
  //     return newRow;
  //   }));
  // }
  // const handleEditRow = (index) => {
  //   setRowToEdit(index);
  //   setModalOpen(true);
  // }
  return (
    <div className="App">
      <RecordsTable />
      {/* <Table rows={rows} handleDeleteRow={handleDeleteRow} editRow={handleEditRow} />
      <button className='btn' onClick={() => setModalOpen(true)}>Add</button>
      {modalOpen && <Modal closeModal={() => { setModalOpen(false); setRowToEdit(null) }} onSubmit={handleSubmit} defaultValue={rowToEdit !== null && rows[rowToEdit]} />} */}
      {/* Skeleton doesn't have correct layout in list */}
      {/* <SkeletonTheme baseColor="#9a9c9a" highlightColor="#c0c2c1">
        <CardListInfinite />
      </SkeletonTheme> */}
      
      {/* <Carousel data={slides.slides} /> */}
      {/* <SearchBar setResults={setResults} />
      <SearchResultsList results={results} /> */}
      {/* <CreateAppForm></CreateAppForm>
      <CountrySelect></CountrySelect> */}
      {/* <PokeDex></PokeDex> */}
      {/* <div className='todo-list'>
        <ToDo></ToDo>
      </div> */}
      {/* <div>
        <TrafficLight></TrafficLight>
      </div>
      <div>
        <Clock></Clock>
      </div> */}
    </div>
  );
}

export default App;
