import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import GoodsStore from './components/GoodsStore/GoodsStore';
import Header from './components/Header/Header';
import ProductPage from './components/ProductPage/ProductPage';
import Main from './components/Main/Main';
import './styles/App.scss';
import ProductCartProvider from './components/ProductCart/ProductCart';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import OrderComplete from './components/OrderComplete/OrderComplete';

function App() {
  return (
    <>
      <ProductCartProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/store' element={<GoodsStore />} >
            <Route index element={<GoodsStore />} />
            <Route path='seeds' element={<GoodsStore />} />
            <Route path='plant-protection' element={<GoodsStore />} />
            <Route path='fertilizers' element={<GoodsStore />} />
            <Route path='feed-group' element={<GoodsStore />} />
            <Route path='agro-to-help' element={<GoodsStore />} />
          </Route>
          <Route path='/order-complete' element={<OrderComplete />} />
          <Route path='/product' element={<ProductPage />} />
          <Route path='*' element={<Main />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </ProductCartProvider>
    </>
  );
}

export default App;
