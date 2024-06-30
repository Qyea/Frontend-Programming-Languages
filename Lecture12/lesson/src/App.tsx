import { Header } from "./components/Header";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="App">
      {open && <Header text="Header 1" />}
      <button onClick={handleClick}>Open | Close</button>
    </div>
  );
}

export default App;
