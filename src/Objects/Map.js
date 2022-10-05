import { Marker, Popup, MapContainer, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import * as Colors from '../Data/Colors' 
import { useEffect, useState } from 'react';

const Map = props => {

    const [data, setData] = useState([])

    const requestFunction = async () => {
        const data = await fetch(`http://127.0.0.1:8000/api`)
        const parsed_data = await data.json()
        console.log(parsed_data)
        setData(parsed_data)
    }
    useEffect(
        ()=>{requestFunction()},
    [])

    const assignColor = (el) => {
        switch (el.type){
            case 'gate':
                return Colors.purpleIcon
            case "skaitītājs":
                return Colors.redIcon
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
                    return(
                    <Marker icon={assignColor(el)} key={el.systems_id} position={[el.systems_latitude,  el.systems_longitude]}>
                        <Popup>
                            {JSON.stringify(el)}
                        </Popup>
                    </Marker>)
                })
            }
        </MapContainer>
    )
}
export default Map