import React from 'react'
import { Circle, Marker, Popup} from "react-leaflet";
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { Location } from '../common/types';

const LocationMaker = () => {
  const locationState: Location = useAppSelector((state) => state.location);
  const radius: number = 30;
  return (
    <div>
      // eslint-disable-next-line
      //@ts-ignore  
      <Circle center={(locationState.lng && locationState.lat) ? { lng: locationState.lng, lat: locationState.lat } : [51.505, -0.09]} radius={radius}>
         <Marker position={(locationState.lng && locationState.lat) ? { lng: locationState.lng, lat: locationState.lat} : [51.505, -0.09]} >
        <Popup >
          <div style={{height: "100", width: "auto", fontSize:"30px",overflow:  "auto"}}>
          Your location
          </div>
        </Popup>
      </Marker>
      </Circle>
    </div>
  )
}

export default LocationMaker