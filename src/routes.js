/* eslint-disable react/jsx-no-undef */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Cardapio from './pages/Cardapio';
import Menu from './components/Menu';

export default function AppRouter() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/cardapio' element={<Cardapio />} />
      </Routes>
    </Router>
  );
}
