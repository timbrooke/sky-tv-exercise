import { Button, Container, Divider, Header, Segment } from "semantic-ui-react";
import React from "react";
import styled from "styled-components";

import { VH3, VP, Centred } from "./Basics";
import VideoArea from "./VideoArea"



const SegmentTwo = ({ Media }) => (
  <Segment style={{ padding: "8em 0em" }} vertical>
    <Container text>
      <VH3 as="h3" style={{ fontSize: "2em" }}>
        The Apparatus
      </VH3>

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
      >
        <a href="#">Controls</a>
      </Divider>

      <VH3>Measure Your Head</VH3>
      <VP>
        Press the button above to begin the apparatus. It will need a few
        seconds to warm up. Then it will begin to measure the vital statistics
        of your head.
      </VP>
    </Container>
  </Segment>
);

export default SegmentTwo;
