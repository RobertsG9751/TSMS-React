import { Marker, Popup, MapContainer, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import * as Colors from '../Data/Colors' 
import React, { useEffect, useState } from 'react';
import style from './Map.module.css'
import ModalBtn from './ModalBtn'

const Map = props => {

    const [data, setData] = useState([])

    const requestFunction = async () => {
        const data = await fetch(`https://lux-tsms.herokuapp.com/api/v1/systems`)
        const parsed_data = await data.json()
        setData(parsed_data)
    }
    useEffect(
        ()=>{requestFunction()},
    [])

    const assignColor = (el) => {
        switch (el.type){
            case 'vārti':
                return Colors.purpleIcon
            case "konsole":
                return Colors.redIcon
            default:
                return Colors.greyIcon
        }
    }
    return(
        <MapContainer className="map" center={[56.6511, 23.7196]} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                data.map(el=>{
                    if(el.type===props.filterOptions[0] ||
                    el.type===props.filterOptions[1] ||
                    el.type===props.filterOptions[2] ||
                    el.type===props.filterOptions[3] || 
                    el.type===props.filterOptions[4]){
                        return(
                            <Marker icon={assignColor(el)} key={el.systems_id} position={[el.systems_latitude,  el.systems_longitude]}>
                                <Popup>
                                    Iela: {el.objects_name} <br/>
                                    Garantija: {el.warranties_date} <br/>
                                    Tips: {el.type} <br/>
            
                                    <button onClick={function(){props.upCall(el)}} className={style.button}>Vēl dati</button>
                                </Popup>
                            </Marker>
                        )
                    }
                    else if(props.filterOptions==""){
                        return(
                            <Marker icon={assignColor(el)} key={el.systems_id} position={[el.systems_latitude,  el.systems_longitude]}>
                                <Popup>
                                    Iela: {el.objects_name} <br/>
                                    Garantija: {el.warranties_date} <br/>
                                    Tips: {el.type} <br/>
            
                                    <button onClick={function(){props.upCall(el)}} className={style.button}>Vēl dati</button>
                                </Popup>
                            </Marker>
                        )
                    }
                })
            }
            <ModalBtn/>
        </MapContainer>
    )
}
export default Map