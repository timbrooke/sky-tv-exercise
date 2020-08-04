import React from "react";
import { Container, Header } from "semantic-ui-react";
import PropTypes from "prop-types";
import { BlackBacking } from "../Basics";

const HomepageHeading = ({ mobile }) => {
  return (
    <BlackBacking>
      <Container text>
        <Header
          as="h1"
          content="Spring Heeled Jack"
          inverted
          textAlign="center"
          style={{
            fontSize: mobile ? "2em" : "4em",
            fontWeight: "normal",
            marginBottom: 0,
            // marginTop: mobile ? "1em" : "2em",
            fontFamily: '"Victorian Orchid", serif',
          }}
        />
        <Header
          as="h2"
          content="The Terror of London"
          inverted
          textAlign="center"
          style={{
            fontSize: mobile ? "1.5em" : "1.7em",
            fontWeight: "normal",
            marginTop: mobile ? "0.5em" : "1.5em",
            fontFamily: '"Victorian Orchid", serif',
          }}
        />
      </Container>
    </BlackBacking>
  );
};

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
};

export default HomepageHeading;
