import React from 'react';
import './App.css';
import Header from "./components/header";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/home";
import Login from './components/login';
import Details from './components/details';

function App() {
  return (
    <div className="App">
      
      <Router>
          <Header />
        <Routes>
          
            <Route index path="/" element={<Login />} />
            <Route  path="home" element={<Home />} />
            <Route  path="detail/:id" element={<Details />} />
          
        </Routes>
      </Router>

    </div>
  );
}

export default App;
