import style from './Legend.module.css'
import HeaderBox from '../UI/HeaderBox'

const Legend = props => {
    return(
        <div className={style.outside}>
            <div className={style.box}>
                <HeaderBox color="kontrolieris" class={style.wrapper} box={style.color_box} box_color={style.color_blue}></HeaderBox>
                <HeaderBox color="skaititājs" class={style.wrapper} box={style.color_box} box_color={style.color_purple}></HeaderBox>
                <HeaderBox color="balsts" class={style.wrapper} box={style.color_box} box_color={style.color_yellow}></HeaderBox>
                <HeaderBox color="konsole" class={style.wrapper} box={style.color_box} box_color={style.color_green}></HeaderBox>
                <HeaderBox color="vārti" class={style.wrapper} box={style.color_box} box_color={style.color_red}></HeaderBox>
            </div>
        </div>
    )
}
export default Legend