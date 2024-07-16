import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 

import Product from './components/Product';
import Dashboard from './components/Dashboard.jsx';
import Cart from './components/Cart.jsx';
import Navbars from './components/Navbar.jsx';
import {Provider} from "react-redux";
import store from '../src/store/Store';

const App = () => {
  return (
    <div>
      <Provider store={store}>
      <BrowserRouter>
        <Navbars />
        <Routes>
          <Route path='/products' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
