import React from 'react';
//import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContaine';

function App() {
  return (
    <div className="App">
    <NavBar />
    <ItemListContainer greating='Lo que Necesites'/>   
        <p>
         Electronica Filomeno
        </p>
       
    </div>
  );
}

export default App;
