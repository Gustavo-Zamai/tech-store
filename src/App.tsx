import React from 'react';
import { Login } from './pages/Login/Login';
import { Home } from './pages/Home/Home';
import  ClientsListPage  from './pages/Customer/CustomersListPage'
import NewClientPage from './pages/Customer/NewCustomerPage';
import EditClientPage from './pages/Customer/EditCustomerPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import { HashRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';
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
