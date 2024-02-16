import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { CartProvider } from './Context/CartContext';
import { Provider } from 'react-redux';
import { store } from './store.js'
import { productApi } from './Services/API.js';
import ProductList from './Components/ProductList.js';
import ProductComments from './Components/ProductComments.js';
import CommentForm from './Components/CommentForm.js';
import Cart from './Components/Cart.js'
import Header from './Components/Header.js'


const App = () => {
  return (
    <Router>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/products" exact component={ProductList} />
          <Route path="/cart" component={Cart} />
          {}
        </Routes>
      </CartProvider>
    </Router>
  );
};

export default App;
