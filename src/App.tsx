import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import ListPage from './pages/ListPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}>
            <Route path="list" element={<ListPage/>}/>
            <Route path="product/:productId" element={<ProductPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>

      <Footer/>
    </div>
  );
}

export default App;
