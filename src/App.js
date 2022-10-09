import './App.css';
import ReactDOM from 'react-dom'
import React, { useState } from 'react';
import Header from './Objects/Header'
import Legend from './Objects/Legend'
import Map from './Objects/Map'
import NewObj from './Objects/NewObj';
import Modal from './UI/Modal'

function App() {

  const [clicked, setClicked] = useState(false)
  const [objData, setObjData] = useState()
  const upCall = async props => {
    const data = await fetch(`https://limitless-fjord-34545.herokuapp.com/api/v1/units/${props.systems_id}`)
    let parsed_data = await data.json()
    setObjData(parsed_data)
    setClicked(true)
  }
  const closeModal = props =>{
    setClicked(false)
  }

  return (
    <React.Fragment>
      {
        clicked && (
          <Modal data={objData} closeFunction={closeModal}/>
        )
      }
      <div className="App center-flex">
        <div className="box-map">
          <Header></Header>
          <Legend></Legend>
          <NewObj></NewObj>
          <Map upCall={upCall}></Map>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
