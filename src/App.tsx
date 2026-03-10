import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login/Login';
import { Home } from './pages/Home/Home';
import  ClientsListPage  from './pages/Customer/CustomersListPage'
import NewClientPage from './pages/Customer/NewCustomerPage';
import EditClientPage from './pages/Customer/EditCustomerPage';
import ProductsListPage from './pages/Product/ProductsListPage';
import NewProductPage from './pages/Product/NewProductPage';
import EditProductPage from './pages/Product/EditProductPage';
import EmployeeListPage from './pages/Employee/EmployeeListPage';
import EditEmployeePage from './pages/Employee/EditEmployeePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path="/clientes" element={<ClientsListPage />} />
        <Route path="/clientes/novo" element={<NewClientPage />} />
        <Route path="/clientes/:id" element={<EditClientPage />} />
        <Route path="/produtos" element={<ProductsListPage />} />
        <Route path="/produtos/novo" element={<NewProductPage />} />
        <Route path="/produtos/:id" element={<EditProductPage />} />
        <Route path="/funcionarios" element={<EmployeeListPage />} />
        <Route path="/funcionarios/:id" element={<EditEmployeePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
