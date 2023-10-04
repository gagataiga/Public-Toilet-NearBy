import React, { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLng } from "leaflet";
import LocationMaker from './LocationMarker';
const Map = () => {
  const position = new LatLng(51.505, -0.09); 
  
  useEffect(() => { 
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
         console.log(position);
        },
        (error) => {
          console.error("Error getting user location: ", error);
        }
      );
    } else {
      console.log("Geolocation is not supported by your browser");
    }
  }, []); 

  return (
    <div>
      <MapContainer center={position} zoom={14} style={{height: "70vh", width: "100vw"}}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      <LocationMaker />
      </MapContainer>
    </div>
  )
}

export default Map