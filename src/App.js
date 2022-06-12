import React, { useState } from 'react';
import './App.css';
import NavBar from './components/Navbar/Navbar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContaine';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const [page, setPage] = useState('list')
 
  return (
    <div className="App">
        <p>
          <h1>Electronica Filomeno</h1>
        </p>
        {/*<div>
           <button onclick={() => setPage()}></button>
           <button onclick={() => setPage('detail')}></button>
          
        </div>

          {page === 'list' && <ItemListContainer greeting='Hola Filo' />}
          {page === 'datail' && <ItemDetailContainer />}*/}
          <BrowserRouter>
            <NavBar/>
            <Routes>
            <Route path='/' element={<ItemListContainer greating='Lo que Necesites'/>} />
            <Route path='/category/:categoryId' element={<ItemDetailContainer/>} />
            <Route path='/detail/:productId' element={<ItemDetailContainer/>} />
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
