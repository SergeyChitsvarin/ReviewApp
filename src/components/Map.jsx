import React from 'react';
import 'leaflet/dist/leaflet.css';


export default Map()
{

    return(
        <MapContainer 
                center={[56, -106]} 
                zoom={4} 
                style={{ height: '500px', width: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </MapContainer>

    )    
}