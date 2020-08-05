import React, { useContext } from "react";
import { Button, Grid, Image, Segment } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

import { store } from "../../store/store";

import { TopH3, VH3, VP } from "../Basics";
import Jumper from "../../utils/Jumper";

const SegmentOne = () => {
  const history = useHistory();
  const globalState = useContext(store);
  const { dispatch } = globalState;

  const handleProceed = () => {
    Jumper.getInstance().jumpTo("Apparatus", history, dispatch);
  };

  return (
    <Segment vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <TopH3 style={{ paddingTop: "30px" }}>Evening prowler</TopH3>
            <VP>
              Last night a screaming man pounded on the door of Mistress Jane
              Alsop requesting help. He shouted, “Help me! I have caught Spring
              Heeled Jack!” Rushing to his aid, she was horrified and shocked at
              what she saw. Blue flames came from the stranger’s mouth and it
              burnt her face and apron. Her clothes were torn with metal claws.
              Luckily, a servant came to her rescue and using an axe frightened
              the prowler away. They both described a ferocious man dressed in a
              tight, white outfit. “He was wearing a helmet from which his red
              eyes “shot out like fireballs”.
            </VP>
            <VH3>Recruitment</VH3>
            <VP>
              Any witnesses to this bizarre attack are requested to come
              forward. We must track this monster down. If you have any
              information or would like to assist our enquiries, you are invited
              to join the investigative force. We assess all volunteers for
              their suitability using the latest science of phrenology. Your
              head, including your skull proportions and facial type will be
              measured to determine if you have the acumen to solve this
              mystery.
            </VP>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image
              bordered
              rounded
              size="large"
              src="/images/spring_heeled_jack_fence.jpg"
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Button size="huge" onClick={handleProceed}>
              Proceed
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default SegmentOne;
