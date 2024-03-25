import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';
import ProductsDetails from './pages/ProductDetail';
import Favorites from './pages/Favorites';
import Header from './components/Header';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products" element={<HeaderAndProducts />} />
      <Route path="/product/:id" element={<HeaderAndProductDetails />} />
      <Route path="/favorites" element={<HeaderAndFavorites />} />
    </Routes>
  </BrowserRouter>
);

const HeaderAndProducts = () => (
  <>
    <Header />
    <Products />
  </>
);

const HeaderAndProductDetails = () => (
  <>
    <Header />
    <ProductsDetails />
  </>
);

const HeaderAndFavorites = () => (
  <>
    <Header />
    <Favorites />
  </>
);

export default App;
