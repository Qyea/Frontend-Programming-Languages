import { MouseEventHandler, useContext } from "react";
import { Context } from "../context";

type Props = {
  onClick: MouseEventHandler;
};

export const Button = ({ onClick, ...props }: Props) => {
  return (
    <button onClick={onClick} {...props}>
      Click
    </button>
  );
};
