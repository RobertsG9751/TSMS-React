import style from './Legend.module.css'
import HeaderBox from '../UI/HeaderBox'

const Legend = props => {
    return(
        <div className={style.box}>
            <HeaderBox color="blue" class={style.wrapper} box={style.color_box} box_color={style.color_blue}></HeaderBox>
            <HeaderBox color="purple" class={style.wrapper} box={style.color_box} box_color={style.color_purple}></HeaderBox>
            <HeaderBox color="yellow" class={style.wrapper} box={style.color_box} box_color={style.color_yellow}></HeaderBox>
            <HeaderBox color="green" class={style.wrapper} box={style.color_box} box_color={style.color_green}></HeaderBox>
            <HeaderBox color="orange" class={style.wrapper} box={style.color_box} box_color={style.color_orange}></HeaderBox>
            <HeaderBox color="red" class={style.wrapper} box={style.color_box} box_color={style.color_red}></HeaderBox>
        </div>
    )
}
export default Legend