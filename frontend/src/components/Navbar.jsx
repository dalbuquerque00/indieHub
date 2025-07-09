// src/components/Navbar.jsx
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <NavLink className="navbar-logo" to="/">indieHub</NavLink>
        <NavLink className="navbar-link" to="/catalog">Catálogo</NavLink>
        <NavLink className="navbar-link" to="/submit">Adicionar Jogo</NavLink>
        <NavLink className="navbar-link" to="/profile">Perfil</NavLink>
      </div>
      <div className="navbar-right">
        <NavLink to="/login" className="navbar-btn">Entrar</NavLink>
        <NavLink to="/register" className="navbar-btn navbar-btn-register">Cadastrar</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;