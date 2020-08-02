/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
import React from "react";
import { Button, Container, Header, Icon, Image } from "semantic-ui-react";
import PropTypes from "prop-types";

import {Centred} from './Basics'

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as="h1"
      content="Spring heeled Jack"
      inverted
      style={{
        fontSize: mobile ? "2em" : "4em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: mobile ? "1em" : "2em",
        fontFamily: '"Victorian Orchid", serif'
      }}
    />
    <Header
      as="h2"
      content="The terror of London"
      inverted
      style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        marginTop: mobile ? "0.5em" : "1.5em",
        fontFamily: '"Victorian Orchid", serif'
      }}
    />

    <Centred>
    <Image src={'/images/cover_page.png'} style={{margin:'2em 0 2em 0'}} size={"large"} />
    </Centred>

    <Button primary size="huge" style={{
      fontFamily: '"Victorian Orchid", serif'
    }}>
      Uncover the Beast!
      <Icon name="right arrow" />
    </Button>

  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
};

export default HomepageHeading;
