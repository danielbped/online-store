import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';
import ProductsDetails from './pages/ProductDetail';
import Favorites from './pages/Favorites';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<ProductsDetails />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  </BrowserRouter>
);

export default App;