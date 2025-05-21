import React from 'react';
import './Menu.css';

function Menu() {
  return (
    <nav className="main-menu">
      <div className="menu-item has-dropdown">
        <span>Masculino</span>
        <div className="dropdown">
          <a href="#">Camisetas Streetwear</a>
          <a href="#">Camisetas Básicas</a>
          <a href="#">Camisetas Polo</a>
          <a href="#">Camisetas Regatas</a>
          <a href="#">Camisetas Oversized</a>
          <a href="#">Calças Jogger</a>
          <a href="#">Calças Jeans</a>
          <a href="#">Shorts</a>
          <a href="#">Bermudas Cargo</a>
        </div>
      </div>

      <div className="menu-item has-dropdown">
        <span>Feminino</span>
        <div className="dropdown">
          <a href="#">Cropped Streetwear</a>
          <a href="#">Camisetas Femininas</a>
          <a href="#">Calças Femininas</a>
          <a href="#">Shorts & Saias</a>
          <a href="#">Vestidos</a>
          <a href="#">Oversized</a>
          <a href="#">Moletom Feminino</a>
        </div>
      </div>

      <div className="menu-item has-dropdown">
        <span>Novidades</span>
        <div className="dropdown">
          <a href="#">Lançamentos</a>
          <a href="#">Mais Vendidos</a>
          <a href="#">Coleção 2025</a>
        </div>
      </div>

      <div className="menu-item has-dropdown">
        <span>Acessórios</span>
        <div className="dropdown">
          <a href="#">Bonés</a>
          <a href="#">Meias</a>
          <a href="#">Mochilas</a>
          <a href="#">Carteiras</a>
        </div>
      </div>

      <div className="menu-item has-dropdown">
        <span className="sale">🔥 Sale</span>
        <div className="dropdown">
          <a href="#">Até 30% OFF</a>
          <a href="#">Até 50% OFF</a>
          <a href="#">Últimas Peças</a>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
