import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Segment, Container, Image, Button, Icon } from "semantic-ui-react";
import styled from "styled-components";
import { Centred } from "../Basics";
import Jumper from "../../utils/Jumper";

const Backing = styled.div`
  width: 100%;
  background-color: #1b1c1d;
`;

const Placeholder = styled.div`
  height: 30px;
  width: 10px;
`;

const TopSegment = () => {
  const placeHolderRef = useRef();
  const history = useHistory();

  useEffect(() => {
    Jumper.getInstance().registerLoc("LastNight","/", placeHolderRef);
  }, [placeHolderRef]);

  const onClick = () => {
    Jumper.getInstance().jumpTo("LastNight", history);
  };
  return (
    <Backing>
      <Container>
        <Segment inverted>
          <Centred>
            <Image
              src={"/images/cover_page.png"}
              style={{ margin: "2em 0 2em 0" }}
              size={"large"}
            />

            <Button
              size="huge"
              style={{
                fontFamily: '"Victorian Orchid", serif',
              }}
              onClick={onClick}
            >
              Uncover the Beast!
              <Icon name="right arrow" />
            </Button>
            <Placeholder ref={placeHolderRef} />
          </Centred>
        </Segment>
      </Container>
    </Backing>
  );
};

export default TopSegment;
