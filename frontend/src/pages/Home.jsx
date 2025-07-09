import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">Bem-vindo ao IndieHub!</h1>
      <p className="home-description">
        Descubra, avalie e compartilhe os melhores jogos indies do momento. Explore o catálogo, conheça novos desenvolvedores, e faça parte da comunidade apaixonada por jogos criativos e independentes!
      </p>
      <button className="home-cta" onClick={() => navigate("/catalog")}>
        Explorar Catálogo
      </button>
    </div>
  );
}

export default Home;