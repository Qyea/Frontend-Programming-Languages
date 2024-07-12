import { Provider, useDispatch } from "react-redux";

import { addTodo, store } from "../redux/store";
import { useFetchRandomDogQuery } from "../modules/data/data.slice";

export function Header() {
  const dispatch = useDispatch();

  const data = useFetchRandomDogQuery("test");

  const handleClick = () => {
    dispatch(addTodo("Task"));
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Click</button>
    </div>
  );
}
