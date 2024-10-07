import React from "react";

const TextContent = ({ text = "text", ...props }) => {
  return (
    <div>
      <h1
        className="text-2xl font-bold flex justify-center font-serif"
        {...props}
      >
        {text}
      </h1>
    </div>
  );
};

export default TextContent;
