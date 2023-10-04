import React from 'react'
import { Marker, Popup} from "react-leaflet";
const LocationMaker = () => {
  
  return (
    <div>
      <Marker position={[, -0.09]}>
        <Popup >
          <div style={{height: "500px", width: "auto", fontSize:"30px",overflow:  "auto"}}>
          A pretty CSS3 popup. Easily customizable
          </div>
      </Popup>
      </Marker>
    </div>
  )
}

export default LocationMaker