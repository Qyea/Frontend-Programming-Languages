import { List } from "./components/List";

function App() {
  return (
    <div>
      <List>
        {[1, 2, 3].map((item) => {
          return (
            <List.Item key={item}>
              <List.Item.Text text={item} />
            </List.Item>
          );
        })}
      </List>
    </div>
  );
}

export default App;
