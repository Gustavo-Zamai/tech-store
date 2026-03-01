import React from 'react';
import { Login } from './pages/Login/Login';
import { Home } from './pages/Home/Home';
import { Clientes } from './pages/Clientes/Clientes'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/clientes' element={<Clientes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
