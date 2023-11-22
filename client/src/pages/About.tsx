import React from 'react';
import "./About.css";
import { aboutPageTitleAndArticles } from '../common/data/aboutArticle';
import { Link } from '@mui/material';

const About = () => {

  return (
    <div className='about'>
      <div className='about__container'>
        <div className='about__title'>
        <h3>About</h3>
        </div>
        {aboutPageTitleAndArticles.map((item, index)=>{ 
          return ( <div key={index} className='about-article__container'>
          <article className='about__article_card'>
            <div className='about__article_title'>
              <h4>
                  {item.title}
              </h4>
            </div>
            <p className='about__article'>
                {item.article}
            </p>
          </article>
          </div>
          )
        })}

        <div className='about-article__container'>
          <div className='about__article_card'>
            <p className=''>
            If you are interested, please contact me using the link below.
            </p>
            <div className='link__container'>
            <Link href="https://github.com/gagataiga/Near-me-toilet2" underline="hover" target="_blank">Git Hub
            </Link>
            </div>
            <div className='link__container'>
            <Link href="www.linkedin.com/in/taiga-shiga" underline="hover"  target="_blank">LinkedIn
              </Link>
            </div>
            <div className='link__container'>
            <Link href="https://www.wantedly.com/id/gaga55" underline="hover"  target="_blank">Wantedly
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About