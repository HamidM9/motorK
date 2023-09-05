import logo from './logo.svg';
import './App.css';
import "./Table.js"
import MyTable from './Table.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Initialize
        </p>
        <h1>Table for Cars</h1>
        <MyTable></MyTable>
        <MyTable></MyTable>
      </header>
    </div>
  );
}

export default App;
