import React from 'react';
import "./About.css";

const About = () => {
  return (
    <div className='about'>
      <div className='about__container'>
        <div className='about__title'>
        <h3>About</h3>
        </div>
        <div className='about-article__container'>
          <div className='about__article_card'>
            <div className='about__article_title'>
              <h4>
              What is this App?
              </h4>
            </div>
            <p className='about__article'>
                Public-Toilet-Nearby is a service that allows you to find nearby public toilets,
                regardless of whether they are free or paid. You can choose a toilet you want to visit from your current location and even get directions, ensuring you can easily find a restroom without getting lost.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About