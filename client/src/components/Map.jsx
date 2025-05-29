import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';

export default function CanadianMap() {

  const navigate = useNavigate();
  const centre = [53.334242362310036, -107.33698365737052];
  const cityMarkers = [
    {
      geocode: { lat: 51.067349, lng: -114.073226 },
      popUp: "Calgary"
    },
    {
      geocode: { lat: 53.550197, lng: -113.491190 },
      popUp: "Edmonton"
    },
    {
      geocode: { lat: 49.250249, lng: -123.162260 },
      popUp: "Vancouver"
    },
    {
      geocode: { lat: 52.143223, lng: -106.656894 },
      popUp: "Saskatoon"
    },
    {
      geocode: { lat: 50.452265, lng: -104.602649 }, 
      popUp: "Regina"
    },
    {
      geocode: { lat: 49.904130, lng: -97.173133 },
      popUp: "Winnipeg"
    },
    {
      geocode: { lat: 43.679809, lng: -79.366570 },
      popUp: "Toronto"
    },
    {
      geocode: { lat: 45.438684, lng: -75.727755 },
      popUp: "Ottawa"
    },
    {
      geocode: { lat: 45.558673, lng: -73.601452 },
      popUp: "Montreal"
    },
        {
      geocode: { lat: 48.421473, lng: -123.381733 },
      popUp: "Victoria"
    },
    {
      geocode: { lat: 45.438684, lng: -75.727755 },
      popUp: "Ottawa"
    },
    {
      geocode: { lat: 44.672155, lng: -63.600806 },
      popUp: "Halifax"
    }
  ];

  return (
    <MapContainer 
      center={centre} 
      zoom={4} 
      style={{ height: '100vh', width: '100%' }}
    >
      <TileLayer 
        url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=yU4ZkrzV8EbltZ688TjL"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />

      {cityMarkers.map((marker, index) => (
        <Marker key={index} position={[
          marker.geocode.lat, 
          marker.geocode.lng ]}
          eventHandlers = {{click: () => navigate(`/cities/${marker.popUp}`)}}
          >
        </Marker>
      ))}
    </MapContainer>
  );
}
