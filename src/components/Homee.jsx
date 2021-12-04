import React from 'react';
import HomepageFirst from './HomepageFirst';
import './Homepage.css';
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from './Data';

function Homee(){
  return(
    <>
    <div>
      <HomepageFirst{...homeObjOne}/>
      <HomepageFirst{...homeObjTwo}/>
      <HomepageFirst{...homeObjThree}/>
      <HomepageFirst{...homeObjFour}/>
    </div>
    <div className="Bar">
     <div className="Bar-text">copyright </div>
    </div>
    </>
 );
}

export default Homee;