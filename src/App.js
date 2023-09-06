import logo from './logo.svg';
import './App.css';
import "./Table.js"
import "./Entry"
import "./data"
import MyTable from './Table.js';
import Entry from './Entry';
import data from './data';
function App() {
  return (
    <div className="App">
      <Entry
      make = {data[0].make}
      model = {data[0].model}
      price = {data[0].price}
       />
        
    </div>
  );
}

export default App;
