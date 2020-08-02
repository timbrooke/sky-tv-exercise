import React from "react";
import Measure from "./Measure";

const ExpressionGauges = ({ expressions }) => (
  <>
    {expressions.map((e) => (
      <Measure label={e.label} value={100 * e.value} key={e.label} />
    ))}
  </>
);

export default ExpressionGauges;
