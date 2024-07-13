import React from "react";
import { useDispatch } from "react-redux";
import { incrementCounter } from "../ducks/counter/actions";

export const Header = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log("ACTION");
    dispatch(incrementCounter(3));
  };
  return (
    <header>
      <h1>Header</h1>
      <button onClick={handleClick}>Click</button>
    </header>
  );
};
