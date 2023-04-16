import './App.css';
import Clock from './Clock';
import PokeDex from './PokeDex';
import ToDo from './ToDo';
import TrafficLight from './TrafficLight';

function App() {
  return (
    <div className="App">
      <PokeDex></PokeDex>
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
