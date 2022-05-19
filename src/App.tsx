import "./App.css";
import { Layout } from "./components/layout/Layout";
import { ItemListContainer } from "./components/itemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Layout>
        <ItemListContainer greeting="Bienvenidos!" />
      </Layout>
    </div>
  );
}

export default App;
