import React,{useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'

const MapView = () => {

    function LocationMarker() {
        const [position, setPosition] = useState(null)
        const map = useMapEvents({
          click(e) {
            
            setPosition(e.latlng)
          }
        })
      
        return position === null ? null : (
          <Marker position={position}>
              {console.log(position)}
            <Popup>You are at {position.lat},{position.lng}</Popup>
          </Marker>
        )
      }

    return (
        <div className='container'>
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* 
        <Marker position={[51.505, -0.09]}>
            <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
        */}
        <LocationMarker />
        </MapContainer>
        </div>
    )
}

export default MapView
