import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Header } from "./components/Header.tsx";
import { Footer } from "./components/Footer.tsx";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <div className="App">App</div>
      <Footer />
    </Provider>
  );
}

export default App;
