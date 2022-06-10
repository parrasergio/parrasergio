import React from 'react';

import './App.css';
import NavBar from './components/Navbar/Navbar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContaine';

function App() {
  return (
    <div className="App">
        <p>
          <h1>Electronica Filomeno</h1>
        </p>
    <NavBar />
    <ItemListContainer greating='Lo que Necesites'/>  
        
       
    </div>
  );
}

export default App;
