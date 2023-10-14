import React from 'react'
import { Circle, Marker, Popup} from "react-leaflet";
import { useAppSelector, useAppDispatch } from '../redux/hooks';

const LocationMaker = () => {
  const locationState = useAppSelector((state) => state.location);
  console.log(locationState);
  return (
    <div>
      <Circle center={(locationState.lng && locationState.lat) ? { lng: locationState.lng, lat: locationState.lat } : [51.505, -0.09]} >
        <Marker position={(locationState.lng && locationState.lat) ? { lng: locationState.lng, lat: locationState.lat} : [51.505, -0.09]} >
        <Popup >
          <div>
          Your location
          </div>
        </Popup>
      </Marker>
      </Circle>
    </div>
  )
}

export default LocationMaker