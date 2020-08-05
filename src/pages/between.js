import React from "react";
import { Button } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

import styled from "styled-components";

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
        <p>
          We have you here somewhat under false pretenses. We've been suspecting
          for a while and the apparatus has allowed us to study your brainwaves.
          Actually your brainwaves tell us something about your temperament.
        </p>
        <p>
          Dare you face the mirror of truth? It will reveal your true nature.
        </p>
        <ButtonSpacer>
          <Button onClick={handleClickProceed}>Click to proceed</Button>
        </ButtonSpacer>
      </TextHolder>
    </Backing>
  );
};

export default Page;
