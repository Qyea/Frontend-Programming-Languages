import { Provider } from "react-redux";

import { store } from "./redux/store";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
      </Provider>
    </div>
  );
}

export default App;
