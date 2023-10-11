import React from 'react'
import { useAppSelector } from '../redux/hooks';
import { Location } from '../common/types';

const Navigator = () => {
  const locationState: Location = useAppSelector((state) => state.location);

  // console.log(duration, distance,steps,routes);
  
  return (
    <div className='navigator_conrainer'>
      <div className='duration'>
        
      </div>
      <div className='distance'>
        
      </div>

      <div className='navigation'>

      </div>

    </div>
  )
}

export default Navigator