import React from "react";

const KeyzButton = ({ text, feature, style }) => {
  return (
    <>
      {feature === "borderAnimate" && (
        <div
          className={`px-3 py-2 btn hover:text-red-600  border-white flex items-center ${style}`}
        >
          {text}
        </div>
      )}
    </>
  );
};

export default KeyzButton;
