import React, { useEffect, useRef } from "react";
import { initApp } from "../apps/comedyGlasses/comedyGlasses";

import styled from "styled-components";
import Jumper from "../utils/Jumper"

const Wall = styled.div`
  // background-image: url('images/mirror_with_hole.png');
  background-image: url("images/mirror_cutout_black_white.png");

  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 9000;
  p {
    color: crimson;
    font-family: "Victorian Orchid", serif;
    font-size: 4em;
    top: 0em;
    left: 1em;
    position: absolute;
  }
`;

const MonsterPage = () => {
  const wallRef = useRef();
  useEffect(() => {
    initApp();
    Jumper.getInstance().registerLoc('Beast','/monster',wallRef)
  },[]);
  return (
    <div className="App">
      <canvas width="1024" height="1024" id="jeeFaceFilterCanvas" />
      <div id="jeelizFaceFilterFollow" />
      <Wall>
        <p>You are the beast!</p>
      </Wall>
    </div>
  );
};

export default MonsterPage;
