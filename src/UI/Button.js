import style from './Button.module.css'

const Button = props =>{
    return(
        <input className={`${style.button} general_btn`} value={props.value} onClick={props.onClick} type={props.type || "button"}></input>
    )
}
export default Button