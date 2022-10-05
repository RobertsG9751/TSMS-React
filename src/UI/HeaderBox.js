const HeaderBox = props => {
    return(
        <div className={`${props.class} center-flex`}>
                <div className={`${props.box} ${props.box_color}`}></div>
                <p>{props.color}</p>
        </div>
    )
}
export default HeaderBox