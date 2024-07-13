import React from "react";
import { useSelector, UseSelector } from "react-redux";
import { countSelector } from "../ducks/counter/selector";

export const Footer = () => {
  const count = useSelector(countSelector);
  return (
    <footer>
      <h1>Footer</h1>
      <div>{count}</div>
    </footer>
  );
};
