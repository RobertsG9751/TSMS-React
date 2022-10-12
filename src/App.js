import './App.css';
import ReactDOM from 'react-dom'
import React, { useState } from 'react';
import Map from './Objects/Map'
import NewObj from './Objects/NewObj';
import Modal from './UI/Modal'
import Options from './UI/Options';

function App() {

  const [clicked, setClicked] = useState(false)
  const [objData, setObjData] = useState()
  const [filterOptions, setFilterOptions] = useState([])
  const upCall = async props => {
    const data = await fetch(`https://lux-tsms.herokuapp.com/api/v1/units/${props.systems_id}`)
    let parsed_data = await data.json()
    setObjData(parsed_data)
    setClicked(true)
  }
  const closeModal = props =>{
    setClicked(false)
  }

  const optionsUpFunc = props => {
    setFilterOptions(props)
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
          <NewObj></NewObj>
          <Map upCall={upCall} filterOptions={filterOptions}></Map>
        </div>
        <Options upFunc={optionsUpFunc}/>
      </div>
    </React.Fragment>
  );
}

export default App;
