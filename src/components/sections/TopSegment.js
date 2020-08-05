import React from "react";
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
  const history = useHistory();
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
            <Placeholder />
          </Centred>
        </Segment>
      </Container>
    </Backing>
  );
};

export default TopSegment;
