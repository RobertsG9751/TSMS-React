import style from './ModalBtn.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const ModalBtn = props =>{

    const [isClicked, setIsClicked] = useState(false)

    const showOptions = () => {
        setIsClicked(true)
    }
    if(isClicked){
        document.querySelector("#options").style.transform="translateX(0)"
        document.querySelector("#options").style.display="inline"
        setIsClicked(false)
    }

    return(
        <div className={style.btn} onClick={showOptions}>
            <svg xmlns="http://www.w3.org/2000/svg" className={style.icon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
        </div>
    )
}
export default ModalBtn