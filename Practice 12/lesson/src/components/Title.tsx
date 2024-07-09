import { useContext } from "react";
import { Context } from "../context";

export const Title = () => {
  const {
    state: { title },
  } = useContext(Context);
  return <p>{title}</p>;
};
