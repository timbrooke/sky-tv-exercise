import React, {useEffect} from "react";
// import { initApp } from '../apps/comedyGlasses/comedyGlasses';

import styled from "styled-components";

const Wall = styled.div`
  background-image: url('images/mirror_with_hole.png');
  background-size:cover;
  background-repeat: no-repeat;
  position:absolute;
  width:100vw;
  height:100vh;
  z-index: 9000;
`

const MonsterPage = () => {
  return (
    <div className="App">

      <canvas width="1024" height="1024" id='jeeFaceFilterCanvas'/>

      <div id='jeelizFaceFilterFollow'/>

      <Wall/>
    </div>
  );
};



export default MonsterPage;
