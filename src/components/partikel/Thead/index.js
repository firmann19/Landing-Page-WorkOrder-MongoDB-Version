import React from "react";

function Thead({ text }) {
  return (
    <thead className="label thead-dark">
      <tr>
        {text.map((text, index) => {
          return <th className="color-palette-1 fw-bold text-xxl" key={index}>{text}</th>;
        })}
      </tr>
    </thead>
  );
}

export default Thead;
