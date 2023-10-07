import React from 'react'
import { Marker, Popup} from "react-leaflet";
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { Location } from '../common/types';

const LocationMaker = () => {
  const locationState: Location = useAppSelector((state) => state.location);
  return (
    <div>
      <Marker position={(locationState.lng && locationState.lat) ? { lng: locationState.lng, lat: locationState.lat} : [51.505, -0.09]}>
        <Popup >
          <div style={{height: "100", width: "auto", fontSize:"30px",overflow:  "auto"}}>
          A pretty CSS3 popup. Easily customizable
          </div>
      </Popup>
      </Marker>
    </div>
  )
}

export default LocationMaker