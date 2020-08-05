import React from "react";
import {Button, Container} from "semantic-ui-react";
import { useHistory } from "react-router-dom";

import styled from "styled-components";
import {VP} from "../components/Basics"

const Backing = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1B1C1D;
  color: white;
  font-family: "Victorian Orchid", serif;
`;

const TextHolder = styled.div`
  max-width: 600px;
  @media (max-width: 768px) {
    max-width: 400px;
  }
  font-size: 1.5em;
  line-height: 1.5em;
  letter-spacing: 0.1em;
`;

const ButtonSpacer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Page = () => {
  const history = useHistory();

  function handleClickProceed() {
    history.push("/monster");
  }

  return (
    <Backing>
      <TextHolder>
        <VP>
          The apparatus has allowed us to gain access to your brainwaves. This
          examination has revealed your personality and inclinations clearly to
          us. Our suspicions are confirmed. We believe you to be our suspect.
        </VP>
        <VP>Time to face the mirror of truth and reveal your true nature.</VP>
        <ButtonSpacer>
          <Button onClick={handleClickProceed}>Click to proceed</Button>
        </ButtonSpacer>
      </TextHolder>
    </Backing>
  );
};

export default Page;
