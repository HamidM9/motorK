import logo from './logo.svg';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Switch, Router } from "react-router-dom";
import { Link } from "react-router-dom";
import './App.css';

import Home from './pages/Home';
import Tesla from './pages/Tesla';
import Toyota from './pages/Toyota'
import Ford from './pages/Ford';
import Honda from './pages/Honda';
import Audi from "./pages/Audi";
import Jeep from "./pages/Jeep";
import BMW from "./pages/BMW";
import Mercedes from "./pages/Mercedes";
import Chevrolet from "./pages/Chevrolet";
import Nissan from "./pages/Nissan";
import Volkswagen from "./pages/Volkswagen";
import Subaru from "./pages/Subaru";
import Kia from "./pages/Kia";
import Hyundai from "./pages/Hyundai";
import Mazda from "./pages/Mazda";
import Acura from "./pages/Acura";
import Volvo from "./pages/Volvo";
import Lexus from "./pages/Lexus";
import Cadillac from "./pages/Cadillac";
import Jaguar from "./pages/Jaguar";
import "./SearchBar.css";





function App() {
  return (
    
    <div className="App">
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Tesla' element={<Tesla />} />
      <Route path='/Ford' element={<Ford />} />
      <Route path='/Toyota' element={<Toyota />} />
      <Route path='/Honda' element={<Honda />} />
      <Route path='/Audi' element={<Audi />} />
      <Route path='/Jeep' element={<Jeep />} />
      <Route path='/BMW' element={<BMW />} />
      <Route path='/Mercedes' element={<Mercedes />} />
      <Route path='/Chevrolet' element={<Chevrolet />} />
      <Route path='/Nissan' element={<Nissan />} />
      <Route path='/Volkswagen' element={<Volkswagen />} />
      <Route path='/Subaru' element={<Subaru />} />
      <Route path='/Kia' element={<Kia />} />
      <Route path='/Hyundai' element={<Hyundai />} />
      <Route path='/Mazda' element={<Mazda />} />
      <Route path='/Acura' element={<Acura />} />
      <Route path='/Volvo' element={<Volvo />} />
      <Route path='/Lexus' element={<Lexus />} />
      <Route path='/Cadillac' element={<Cadillac />} />
      <Route path='/Jaguar' element={<Jaguar />} />


    </Routes>
      

    </div>
    

  );
}

export default App;
