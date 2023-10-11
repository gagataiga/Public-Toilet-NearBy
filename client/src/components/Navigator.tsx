import React from 'react'
import { useAppSelector } from '../redux/hooks';
import { Location } from '../common/types';
import "./Navigator.css";
import { NavigatorProps } from './types';
import { changeToMinutes, formatDistance } from "../utils/util";
import { Button } from '@mui/material';

const Navigator = (props: NavigatorProps) => {
  const { distance, duration, steps, routes, setRoutes } = props;
  const locationState: Location = useAppSelector((state) => state.location);
  const timeRequired: number = changeToMinutes(duration);
  const formatedDistance = formatDistance(distance);
  // console.log(duration, distance,steps,routes);
  const handleNavigation = () => { 
    setRoutes([]);
  }


  return (
    <div className='navigator_conrainer'>
      <div className='dur-dis_conrainer'>
        {timeRequired} Minutes
        {formatedDistance}
      </div>
      
      <div className='nav_container'>
        <div>
        first you should go...
        </div>
      </div>
      <div className='nav_container'>
        <div>
        next is...
        </div>
      </div>
      <Button variant="contained" onClick={()=>handleNavigation()}>Stop Navigating</Button>
    </div>
  )
}

export default Navigator