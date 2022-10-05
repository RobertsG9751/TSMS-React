import style from './Header.module.css'
import Searchbar from '../UI/Searchbar'
import Button from '../UI/Button'
import React, { useState } from 'react';

const Header = props => {

    const [addState, setAddState] = useState(true)

    const addBtnHandler = () =>{
        if(addState === true){
            document.querySelector('.map').style.display="none"
            document.querySelector('.form').style.display="flex"
            setAddState(false)
        }else if(addState === false){
            document.querySelector('.map').style.display="block"
            document.querySelector('.form').style.display="none"
            setAddState(true)
        }
    }

    return(
        <div className={style.box }>
            <Button value={addState?"Pievienot":"Karte"} onClick={addBtnHandler}></Button>
            <Searchbar></Searchbar>
        </div>
    )
}
export default Header;