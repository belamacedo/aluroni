/* eslint-disable react/jsx-no-undef */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Cardapio from './pages/Cardapio';
import Sobre from './pages/Sobre';
import NotFound from './pages/NotFound';
import Menu from './components/Menu';
import Footer from './components/Footer';
import PaginaPadrao from './components/PaginaPadrao';

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<PaginaPadrao />}>
            <Route index element={<Inicio />} />
            <Route path='cardapio' element={<Cardapio />} />
            <Route path='sobre' element={<Sobre />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>

        <Footer />
      </Router>
    </main>
  );
}
