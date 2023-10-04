import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLng } from "leaflet";

const Map = () => {
  const position = new LatLng(51.505, -0.09); 
  
  return (
    <div>
      <MapContainer center={position} zoom={14} style={{height: "70vh", width: "100vw"}}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  )
}

export default Map