import ItemCreate from './components/ItemCreate';
import ItemList from './components/ItemList';

function App() {

  return (
    <div className="app">
      <h1>Item List</h1>
      <ItemList />
      <ItemCreate />
    </div>
  );
}

export default App;
