import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ImageHolder = styled.div`
  position: relative;
  width: 200px;
  height: 90px;
`;
const MeasureGraphics = styled.img`
  position: absolute;
  top: 10px;
  left: 0;
`;

const LineGraphic = styled.svg`
  position: absolute;
  left: ${(props) => props.percent * 1.6 + 17}px;
  top: 25px;
`;

const Heading = styled.h4`
  font-family: "Victorian Orchid", serif;
  position: absolute;
  top: 0;
  left: 20px;
`;

const Measure = ({ label, value }) => {
  return (
    <div>
      <ImageHolder>
        <Heading>{label}</Heading>
        <MeasureGraphics src="/images/measure.svg" />
        <LineGraphic width="180" height="30" percent={value}>
          <rect width="2" height="30" fill="rgb(255,0,0)" strokeWidth={0} />
        </LineGraphic>
      </ImageHolder>
    </div>
  );
};

Measure.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number,
};

Measure.defaultProps = {
  value: 0,
  label: "Emotion",
};

export default Measure;
