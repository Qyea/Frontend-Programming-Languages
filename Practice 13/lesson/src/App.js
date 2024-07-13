import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { Main } from "./components/Main.jsx";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Main />
      <div className="App">App</div>
      <Footer />
    </Provider>
  );
}

export default App;
