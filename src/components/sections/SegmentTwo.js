import React, { useRef, useContext } from "react";
import { Button, Container, Divider, Segment } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

import { store } from "../../store/store";
import { TopH3, VH3, VP } from "../Basics";
import VideoArea from "../VideoArea";
import Jumper from "../../utils/Jumper";

const SegmentTwo = ({ Media }) => {




  return (
    <Segment vertical>
      <Container text>
        <TopH3>The Apparatus</TopH3>
        <VideoArea />
        <Divider
          as="h4"
          className="header"
          horizontal
          style={{
            margin: "3em 0em",
            textTransform: "uppercase",
            fontFamily: "Victorian Orchid",
          }}
        />



      </Container>
    </Segment>
  );
};

export default SegmentTwo;
