import style from './Options.module.css'

const Options = props => {

    const closeOptions = () => {
        document.querySelector("#options").style.transform="translateX(100%)"
        document.querySelector("#options").style.display="none"
    }

    return(
        <div id="options" className={`${style.box} box_hidden`}>
            <button className={style.btn} onClick={closeOptions}>Close</button>
        </div>
    )
}
export default Options;