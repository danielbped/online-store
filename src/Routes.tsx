import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Products from './pages/ProductDetail';
import Register from './pages/Register';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products" element={<Products />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
);

export default App;