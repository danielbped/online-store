import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';
import ProductsDetails from './pages/ProductDetail';
import Favorites from './pages/Favorites';
import { Navigate } from 'react-router-dom';
import Header from './components/Header';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={ <Navigate to="/products" /> } />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<ProductsDetails />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;
