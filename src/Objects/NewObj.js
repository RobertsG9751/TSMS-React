import React from 'react'
import style from './NewObj.module.css'
import Button from '../UI/Button'

const NewObj = props => {
    return(
        <form className={`${style.New_obj} form`}>
            <div className={style.column}>
                <div className={style.wrapper}>
                    <label>Test</label>
                    <input className={style.form_input}></input>
                </div>
                <div className={style.wrapper}>
                    <label>Test</label>
                    <input className={style.form_input}></input>
                </div>
                <div className={style.wrapper}>
                    <label>Test</label>
                    <input className={style.form_input}></input>
                </div>
                <div className={style.wrapper}>
                    <label>Test</label>
                    <input className={style.form_input}></input>
                </div>
            </div>
            <div className={style.column}>
            <div className={style.wrapper}>
                    <label>Test</label>
                    <input className={style.form_input}></input>
                </div>
                <div className={style.wrapper}>
                    <label>Test</label>
                    <input className={style.form_input}></input>
                </div>
                <div className={style.wrapper}>
                    <label>Test</label>
                    <input className={style.form_input}></input>
                </div>
                <div className={style.wrapper}>
                    <label>Test</label>
                    <input className={style.form_input}></input>
                </div>
            </div>
            <input className={`${style.form_btn} general_btn`} type="submit"></input>
        </form>
    )
}
export default NewObj