import React from "react";

export const Button = ({ text, ...buttonProps }) => {
  return (
    <>
      <button className="btn" {...buttonProps}>
        {text}
      </button>
    </>
  );
};
