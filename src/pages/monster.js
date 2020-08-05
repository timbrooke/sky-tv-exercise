import React, { useEffect, useState } from "react";
import { initApp, Jeeliz } from "../apps/comedyGlasses/comedyGlasses";

import styled from "styled-components";
import {Button} from "semantic-ui-react"

const Wall = styled.div`
  background-image: url("images/mirror_cutout_black_white_small.png");
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 9000;
  p {
    color: crimson;
    font-family: "Victorian Orchid", serif;
    font-size: 3em;
    top: 0.5em;
    left: 1em;
    position: absolute;
    opacity: 0;
    transition: opacity ease-in-out 1s;
    filter: drop-shadow(10px,10px,8px,rgba(0,0,0,1));
    text-shadow: 4px 4px 4px #555555;
  }
`;

function handleResize() {
  Jeeliz.resize();
}

const MonsterPage = () => {
  const [opacityA, setOpacityA] = useState(0);
  const [opacityB, setOpacityB] = useState(0);

  useEffect(() => {

    setTimeout(()=>{setOpacityA(1)},4000)
    setTimeout(()=>{setOpacityB(1)},6000)
    window.addEventListener("resize", handleResize);
    initApp();
    return () => {
      // pause video //TODO
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="App">
      <canvas width="1024" height="1024" id="jeeFaceFilterCanvas" />
      <div id="jeelizFaceFilterFollow" />
      <Wall>
        <p style={{ opacity: opacityA }}>You are the beast!</p>
        <p style={{top:'3em',width:'8em', opacity:opacityB}}>Roar and express your rage!</p>
      </Wall>
    </div>
  );
};

export default MonsterPage;
