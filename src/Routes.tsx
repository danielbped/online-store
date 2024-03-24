import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Products from './pages/ProductDetail';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  </BrowserRouter>
);

export default App;