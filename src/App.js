import './App.css';
import Header from './Objects/Header'
import Legend from './Objects/Legend'
import Map from './Objects/Map'
import NewObj from './Objects/NewObj';

function App() {

  return (
    <div className="App center-flex">
      <div className="box-map">
        <Header></Header>
        <Legend></Legend>
        <NewObj></NewObj>
        <Map></Map>
      </div>
    </div>
  );
}

export default App;
