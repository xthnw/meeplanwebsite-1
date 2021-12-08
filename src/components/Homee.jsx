import React from 'react';
import HomepageFirst from './HomepageFirst';
import Homepageabout from './Homepageabout';
import './Homepage.css';
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from './Data';
import './Button.css';

function Homee(){
  return(
    <>
    <div>
      <HomepageFirst{...homeObjOne}/>
      <HomepageFirst{...homeObjTwo}/>
      <HomepageFirst{...homeObjThree}/>
      <Homepageabout{...homeObjFour}/>
    </div>
    <div className="Bar-end">
     <div className="Bar-text" style={{textAlignVertical: "center",textAlign: "center",}}>
     Copyright © Mee Plan 2021.
     </div>
    </div>
    </>
 );
}

export default Homee;