import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../redux/hooks';
import { Location } from '../common/types';
import "./Navigator.css";
import { NavStep, NavigatorProps } from './types';
import { changeToMinutes, formatDistance } from "../utils/util";
import { checkDistance } from '../utils/location';
import { Button } from '@mui/material';

const Navigator = (props: NavigatorProps) => {
  const { distance, duration, steps, routes, setRoutes , setSteps } = props;
  const locationState: Location = useAppSelector((state) => state.location);
  const timeRequired = changeToMinutes(duration);
  const formatedDistance = formatDistance(distance);
  const currentStep:number = 0;

  const handleNavigation = () => { 
    setRoutes([]);
  }

  useEffect(() => {
    const from = { lat: locationState.lat, lng: locationState.lng };
    // const from = { lat: routes[steps[currentStep].way_points[1]][0], lng: routes[steps[currentStep].way_points[1]][1] }
    const to = { lat: routes[steps[currentStep].way_points[1]][0], lng: routes[steps[currentStep].way_points[1]][1] }
    //55.16667358929872... 
    let isCloseToNext = checkDistance(from, to);
    // user current location is close to the point 
    if (isCloseToNext) {
      console.log("user is close to the next step");
      setSteps(steps.filter((step, index) => {
        return index !== 0;
      }));
    } else { 
      console.log("user is not close to the next step")
    }
  },[locationState.lat, locationState.lng]);

    return (
    <div className='navigator_conrainer'>
      <div className='dur-dis_conrainer'>
        {timeRequired} Minutes
       ( {formatedDistance} )
      </div>
      
        <div className='nav_container'>
          {/* {steps.map((step: NavStep, key: number) => {
            const distanceToNextPoint = formatDistance(step.distance);
            return (
              <div key={key} className='nav_step'>
                {step.instruction}
                 ( {distanceToNextPoint} ) 
              </div>)
          })} */}

          {/* <div className='nav_step'>
           
          </div>
          <div className='nav_step'>
           
          </div> */}
      </div>
      <Button variant="contained" onClick={()=>handleNavigation()}>Stop Navigating</Button>
    </div>
  )
}

export default Navigator