import React from 'react';
import { Login } from './pages/Login/Login';
import { Home } from './pages/Home/Home';
import  ClientsListPage  from './pages/Clientes/ClientsListPage'
import NewClientPage from './pages/Clientes/NewClientPage';
import EditClientPage from './pages/Clientes/EditClientPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path="/clientes" element={<ClientsListPage />} />
        <Route path="/clientes/novo" element={<NewClientPage />} />
        <Route path="/clientes/:id" element={<EditClientPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
