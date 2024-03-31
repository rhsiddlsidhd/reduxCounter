import React from "react";
import { useSelector } from "react-redux";

const Box = () => {
  const count = useSelector((state) => state.count);

  return (
    <div>
      <h1>Box {count}</h1>
    </div>
  );
};

export default Box;
