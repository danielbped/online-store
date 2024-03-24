import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);

export default App;