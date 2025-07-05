// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/catalog">Catálogo</Link></li>
        <li><Link to="/submit">Adicionar Jogo</Link></li>
        <li><Link to="/profile">Perfil</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Registrar</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;