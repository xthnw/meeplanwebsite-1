import React from 'react';
import {Button} from './Button';
import { Row, Col, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Animate from './Animate';
import './Homepage.css';

function HomepageFirst({headline, topline,description, buttonLabel, img, link, alt, imgStart}) {
  return(
    <div className="home__hero-section" >
        
    <Container fluid="md" className="container">
      <div className="row home__hero-row"
      style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}
      >
        <div className="col" >
          <div className="home__hero-text-wrapper">
           <Animate>
            <div className="top-line">{topline}</div>
            <h1 className="heading">{headline}</h1>
            <p className="descript">{description}</p>
            <a href={link}>
              <Button >{buttonLabel}</Button>
            </a>
          </Animate>
        </div>
        </div>
        <div className="col">
          <div className="home__hero-img-wrapper">
           <Animate>
            <img src={img} alt={alt} className="home__hero-img" />
          </Animate>
          </div>
        </div>
      </div>
    </Container>
    </div>
  );
}
export default HomepageFirst
