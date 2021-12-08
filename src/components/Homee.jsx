import React from 'react';
import HomepageFirst from './HomepageFirst';
import Homepageabout from './Homepageabout';
import './Homepage.css';
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from './Data';

function Homee(){
  return(
    <>
    <div>
      <HomepageFirst{...homeObjOne}/>
      <HomepageFirst{...homeObjTwo}/>
      <HomepageFirst{...homeObjThree}/>
      <Homepageabout{...homeObjFour}/>
    </div>
    <div className="Bar">
     <div className="Bar-text"> ©Mee Plan 2021 </div>
    </div>
    </>
 );
}

export default Homee;