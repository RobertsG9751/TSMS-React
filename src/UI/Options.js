import style from './Options.module.css'

const Options = props => {

    const closeOptions = () => {
        document.querySelector("#options").style.transform="translateX(100%)"
        document.querySelector("#options").style.display="none"
    }

    return(
        <div id="options" className={`${style.box}`}>
            <button className={style.btn} onClick={closeOptions}>Close</button>
            <div className={style.options}>
                <h2>Filtrēt:</h2>
                <div className={style.box_check}>
                    <input type="checkbox"></input>
                    <span> - Vārti</span>
                </div>
                <div className={style.box_check}>
                    <input type="checkbox"></input> 
                    <span> - Kontrolieri</span>
                </div>
                <div className={style.box_check}>
                <input type="checkbox"></input>
                    <span> - Skaititājs</span>
                </div>
                <div className={style.box_check}>
                    <input type="checkbox"></input>
                    <span> - Balsti</span>
                </div>
                <div className={style.box_check}>
                <input type="checkbox"></input>
                    <span> - Konsole</span>
                </div>
                <input className={style.btn} type="button" value="Filtrtēt"></input>
            </div>
        </div>
    )
}
export default Options;