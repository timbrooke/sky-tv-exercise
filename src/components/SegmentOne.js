import React from "react";
import { Button, Grid, Image, Segment } from "semantic-ui-react";

import {VH3,VP} from './Basics'

const SegmentOne = () => (
  <Segment style={{ padding: "8em 0em" }} vertical>
    <a name={"onTheLoose"} />
    <Grid container stackable verticalAlign="middle">
      <Grid.Row>
        <Grid.Column width={8}>
          <VH3>On the loose ...</VH3>
          <VP>
            Last night a man rang the doorbell of Jane Alsop, screaming that
            they had caught Spring-Heeled Jack, and that they needed help. When
            she brought the man a candle there in the dark street, he proceeded
            to breathe blue flame in her face and tear at her clothes and skin
            with metal claws. She ran back towards her house, but he continued
            to cut her with his claws, until Alsop’s sister came to her rescue,
            scaring off the attacker. Alsop described Jack as having eyes like
            red fireballs, and wearing a helmet and tight-fitting white outfit.
          </VP>
          <VH3>Phrenology</VH3>
          <VP>
            We must track this scoundrel down and we need your help! Below is a
            contraption using the latest science of phrenology will measure
            your head to see if you have the acumen to solve this mystery.
          </VP>
          <VH3>Proceed at once ... </VH3>
          <VP>to the contraption below to measure you head.</VP>
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
          <Button size="huge">Check Them Out</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);

export default SegmentOne;
