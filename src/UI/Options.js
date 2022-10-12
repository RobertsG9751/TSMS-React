import style from './Options.module.css'
import { useState } from 'react'

const Options = props => {

    const closeOptions = () => {
        document.querySelector("#options").style.transform="translateX(100%)"
        document.querySelector("#options").style.display="none"
    }
    const [filteredItems, setFilteredItems] = useState([])

    const checkedFunc = props => {
        if(props.currentTarget.checked){
            setFilteredItems(current=> [...current, props.target.id])
        }else{
            setFilteredItems(filteredItems.filter(function(item){
                return item !== props.target.id
            }))
        }
    }
    const filterFunc = el => {
        props.upFunc(filteredItems)
    }

    return(
        <div id="options" className={`${style.box}`}>
            <button className={style.btn} onClick={closeOptions}>Close</button>
            <div className={style.options}>
                <h2>Filtrēt:</h2>
                <div className={style.box_check}>
                    <input onClick={checkedFunc} id="vārti" className={style.checkbox} type="checkbox"></input>
                    <span> - Vārti</span>
                </div>
                <div className={style.box_check}>
                    <input onClick={checkedFunc} id="kontrolieri" className={style.checkbox} type="checkbox"></input> 
                    <span> - Kontrolieri</span>
                </div>
                <div className={style.box_check}>
                <input onClick={checkedFunc} id="skaitītāji" className={style.checkbox} type="checkbox"></input>
                    <span> - Skaitītāji</span>
                </div>
                <div className={style.box_check}>
                    <input onClick={checkedFunc} id="balsti" className={style.checkbox} type="checkbox"></input>
                    <span> - Balsti</span>
                </div>
                <div className={style.box_check}>
                <input onClick={checkedFunc} id="konsole" className={style.checkbox} type="checkbox"></input>
                    <span> - Konsoles</span>
                </div>
                <input onClick={filterFunc} className={style.btn} type="button" value="Filtrtēt"></input>
            </div>
        </div>
    )
}
export default Options