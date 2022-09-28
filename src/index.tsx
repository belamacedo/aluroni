import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.css';
import Inicio from 'pages/Inicio';
import Cardapio from 'pages/Cardapio';
import Router from './routes';

const componenteAtual =
  window.locationpathname === '/' ? <Inicio /> : <Cardapio />;
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
