"use client"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const ContactBanner = ({ center, zoom, markers }) => {
    useEffect(() => {
        delete L.Icon.Default.prototype._getIconUrl
    
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: '/images/marker-neu.png',
          iconUrl: '/images/marker-icon-neu.png',
          shadowUrl: '/images/marker-neu.png',
        })
      }, [])
    
      return (
        <MapContainer center={center} zoom={zoom} scrollWheelZoom={false} className="h-96 w-full z-0">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {markers.map((marker, index) => (
            <Marker key={index} position={[marker.lat, marker.lng]}>
              <Popup>{marker.popupContent}</Popup>
            </Marker>
          ))}
        </MapContainer>)
    
}

export default ContactBanner