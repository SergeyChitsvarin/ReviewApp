import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


export default function CanadianMap()
{
    const centre = [53.334242362310036, -107.33698365737052];


    return(
        <MapContainer 
                center={centre} 
                zoom={4} 
                style={{ height: '100vh', width: '100vw' }}>
            <TileLayer 
               url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=yU4ZkrzV8EbltZ688TjL"
               attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            />
        </MapContainer>

    )    
}