import React from "react";

const PrimaryButton = ({ className, text, onClick }) => {
  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
};

export default PrimaryButton;
