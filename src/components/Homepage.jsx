import React from 'react';
import {Button} from './Button';
import {Link} from 'react-router-dom';
import './Homepage.css';

function HomepageFirst({headline, topline,description, buttonLabel, img, alt, imgStart}) {
  return(
    <div className="home__hero-section" >
        
    <div className="container">
      <div className="row home__hero-row"
      style={{display: 'flex',flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}
      >
        <div className="col">
          <div className="home__hero-text-wrapper">
            <div className="top-line">{topline}</div>
            <h1 className="heading">{headline}</h1>
            <p className="descript">{description}</p>
            <Link to="/login">
              <Button >{buttonLabel}</Button>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="home__hero-img-wrapper">
            <img src={img} alt={alt} className="home__hero-img" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
export default HomepageFirst
