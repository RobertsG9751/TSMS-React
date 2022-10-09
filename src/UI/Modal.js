import React from "react"
import ReactDOM from "react-dom" 
import style from './Modal.module.css'

const ModalBox = props => {
    console.log(props.data)
    return(
        <div className={style.background}>
            <div className={style.modal}>
            <button className={style.btn} onClick={props.closeFunction}>Close</button>
            <div className={style.nav}>
                Dati
            </div>
            <div className={style.dataBox}>
                {
                    props.data.map(el=>{
                        return(
                            <div>
                                <div>
                                    Serijas numurs: {el.units_serial_number}
                                </div>
                                <div>
                                    Datums: {el.units_date}
                                </div>
                                <div>
                                    Virziens: {el.direction}
                                </div>
                                <div>
                                    Tips: {el.part}
                                </div>
                                <date>
                                    Garantija: {el.warranties_date}
                                </date>
                                <div>
                                    Ražotajs: {el.manufacturer}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            </div>
        </div>
    )
}

const Modal = props => {
    return(
        <React.Fragment>
            {ReactDOM.createPortal(<ModalBox data={props.data} closeFunction={props.closeFunction}/>, document.getElementById("modal-root"))}
        </React.Fragment>
    )
}
export default Modal