import { useState } from 'react';
import './App.css';
import Clock from './Clock';
import CountrySelect from './CountrySelect';
import CreateAppForm from './CreateForm';
import PokeDex from './PokeDex';
import ToDo from './ToDo';
import TrafficLight from './TrafficLight';
import SearchBar from './searchbar/SearchBar';
import SearchResultsList from './searchbar/SearchResultsList';

function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <SearchBar setResults={setResults} />
      <SearchResultsList results={results} />
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
