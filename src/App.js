import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { CartProvider } from './Context/CartContext.js';
import { Provider } from 'react-redux';
import { store } from './store';
import { productApi } from './Services/API.js';
import ProductList from './Components/ProductList.js';
import ProductComments from './Components/ProductComments.js';
import CommentForm from './Components/CommentForm.js';
import Cart from './Components/Cart.js'
import Header from './Components/Header.js'



function App() {


  return (

      <CartProvider
        store={store}
      >
        <BrowserRouter>
          <Header />
          
          <Routes>
            <Route path="/" element={<ProductList/>} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </BrowserRouter>
      </CartProvider>

  );
};

export default App;
