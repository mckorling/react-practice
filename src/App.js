import { useState } from 'react';
import './App.css';
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

  return (
    <div className="App">

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
