import React, {useEffect} from "react";
import { initApp } from '../apps/comedyGlasses/comedyGlasses';

const MonsterPage = () => {
  useEffect(()=>{
    initApp();
  })
  return (
    <div className="App">
      <canvas width="1024" height="1024" id='jeeFaceFilterCanvas'/>
      <div id='jeelizFaceFilterFollow'/>
    </div>
  );
};



export default MonsterPage;
