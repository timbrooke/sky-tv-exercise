import React from "react";
import { Container, Header } from "semantic-ui-react";
import PropTypes from "prop-types";

const HomepageHeading = ({ mobile }) => {
  return (
    <Container text>
      <Header
        as="h1"
        content="Spring Heeled Jack"
        inverted
        style={{
          fontSize: mobile ? "2em" : "4em",
          fontWeight: "normal",
          marginBottom: 0,
          marginTop: mobile ? "1em" : "2em",
          fontFamily: '"Victorian Orchid", serif',
        }}
      />
      <Header
        as="h2"
        content="The Terror of London"
        inverted
        style={{
          fontSize: mobile ? "1.5em" : "1.7em",
          fontWeight: "normal",
          marginTop: mobile ? "0.5em" : "1.5em",
          fontFamily: '"Victorian Orchid", serif',
        }}
      />
    </Container>
  );
};

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
};

export default HomepageHeading;
