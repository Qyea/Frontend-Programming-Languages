import { useDataContext } from "../context";
import { Button } from "./Button";

export const Main = () => {
  const { setState } = useDataContext();
  const onClick = () => {
    setState({
      title: "1111111",
    });
  };
  return <Button onClick={onClick} />;
};
