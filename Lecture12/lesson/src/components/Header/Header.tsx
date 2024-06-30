import { useState, useEffect } from "react";
import "./styles.css";

type Props = {
  text: string;
};

export function Header(props: Props) {
  const [counter, setCounter] = useState<number>(0);
  const handleClick = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    console.log("MOUNT");

    return () => {
      console.log("UN-MOUNT");
    };
  }, []);

  console.log("RENDER");

  return (
    <header>
      <p className={`counter-${counter}`}>{props.text}</p>
      <div>{counter}</div>
      <button onClick={handleClick}>Click</button>
    </header>
  );
}
