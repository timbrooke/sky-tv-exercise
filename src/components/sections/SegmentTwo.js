import React, { useRef, useContext } from "react";
import { Button, Container, Divider, Segment } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

import { store } from "../../store/store";
import { TopH3, VH3, VP } from "../Basics";
import VideoArea from "../VideoArea";
import Jumper from "../../utils/Jumper";

const SegmentTwo = ({ Media }) => {
  const apparatusAnchorRef = useRef();
  const history = useHistory();
  const globalState = useContext(store);
  const { dispatch } = globalState;

  function handleClickProceed() {
    Jumper.getInstance().jumpTo("Between", history, dispatch);
  }

  return (
    <Segment vertical>
      <Container text>
        <TopH3 ref={apparatusAnchorRef}>The Apparatus</TopH3>
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


        <Button onClick={handleClickProceed}>
          Proceed - when you are finished here.
        </Button>
      </Container>
    </Segment>
  );
};

export default SegmentTwo;
