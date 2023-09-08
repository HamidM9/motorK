import logo from './logo.svg';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Switch, Router } from "react-router-dom";
import { Link } from "react-router-dom";

import Tesla from './pages/Tesla';
import './App.css';
import Home from './pages/Home';



function App() {
  return (
    
    <div className="App">
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Tesla' element={<Tesla />} />
    </Routes>
      

    </div>
    

  );
}

export default App;
