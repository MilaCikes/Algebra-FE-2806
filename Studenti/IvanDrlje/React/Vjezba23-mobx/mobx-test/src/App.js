
import GroceryAdd from './components/GroceryAdd';
import { GroceriesList } from './components/GroceriesList';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>My Grocriew - powered by Mobx</h1>
      <GroceriesList/>
      <GroceryAdd/>
    </div>
  );
}

export default App;
