import { Header } from "./components/Header";
import { PropsWithChildren, useState } from "react";

const Text = () => {
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, illum
      aliquam nihil voluptas accusamus provident magnam neque, nemo quisquam
      similique atque quia ipsa dicta quos alias perferendis excepturi, velit
      fuga explicabo sit esse! Consectetur quisquam autem, voluptate amet
      praesentium enim nulla hic fugit voluptatum illo cum, beatae quam ullam
      consequatur.
    </div>
  );
};

type Props = PropsWithChildren<{
  title: string;
}>;

const Title = ({ title, children }: Props) => {
  return (
    <>
      <h1>{title}</h1>
      <p>text</p>
    </>
  );
};

function App() {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const name = "admin";

  return (
    <div className="App">
      {open && <Header text="Header 1" />}
      <button onClick={handleClick}>Open | Close</button>

      <header>Header</header>
      <main>Main</main>
      <Title title="New title">
        <p>title text</p>
      </Title>
      <Text />
      <Text />
      <Text />
      {name === "admin" ? "Ok, success" : "Forbidden"}
      {name === "admin" && "Ok, success"}
      <footer>Footer</footer>
    </div>
  );
}

export default App;
