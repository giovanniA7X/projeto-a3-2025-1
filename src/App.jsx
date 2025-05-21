import React, { useState } from 'react';
import Produto from './components/Produto.jsx';
import Banner from './components/Banner.jsx';
import logo from './assets/The_Blockside_Logo.png';
import ConsultorChatbot from './ConsultorChatbot.jsx';
import './App.css';
import Menu from './components/Menu.jsx';





function App() {
  const [mostrarChat, setMostrarChat] = useState(false);

  const toggleChat = () => {
    setMostrarChat(!mostrarChat);
  };

  return (
    <div>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          backgroundColor: "transparent",
          color: "#fff",
          position:"absolute",
          top:"0",
          left:"0",
          width:"100%",
          zIndex: 10,
        }}
      >
        <img
          src={logo}
          alt="Logo The Blockside"
          style={{ height: "200px", objectFit: "contain" }}
        />

        <div style={{ display: "flex", gap: "16px" }}>
          <button
            style={{
              backgroundColor: "#444",
              color: "#fff",
              border: "none",
              padding: "8px 12px",
              borderRadius: "8px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}
          >
            <i className="fa-solid fa-user"></i>
            Minha Conta
          </button>
          <button
            style={{
              backgroundColor: "#444",
              color: "#fff",
              border: "none",
              padding: "8px 12px",
              borderRadius: "8px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}
          >
            <i className="fa-solid fa-cart-shopping"></i>
            Carrinho
          </button>
        </div>
      </header>

      <Banner />
      <Menu />

      <h2 style={{ textAlign: "center", margin: "30px 0" }}>Destaques</h2>
      <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
        <Produto
          nome="Camiseta Oversized"
          preco="129,90"
          imagem="https://cdn.awsli.com.br/1500x1500/1854/1854288/produto/207267617/modelo-de-tamanho-noiser-2022-09-12t150410-818-copy-15-uskrpm.jpg"
        />
        <Produto
          nome="Boné Dadhat"
          preco="59,90"
          imagem="https://monteleste.cdn.magazord.com.br/img/2022/08/produto/688/acessorios-bone-dadhat-monte-leste-preto-p-1632083289345.jpg"
        />
        <Produto
          nome="Calça Jogger"
          preco="89,90"
          imagem="https://images.tcdn.com.br/img/img_prod/962394/calca_jogger_yod_couture_bolso_cargo_palha_8193_1_2a567b07a7b59a6a7534a0f940367238.jpeg"
        />
      </div>

      {mostrarChat && <ConsultorChatbot />}

      <button className="botao-consultor" onClick={toggleChat} aria-label="Abrir Chat">
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="28" height="28">
          <path d="M12 3C6.48 3 2 6.92 2 11.5c0 2.2 1.02 4.19 2.7 5.68L4 21l4.07-1.35C9.26 20.21 10.6 20.5 12 20.5c5.52 0 10-3.92 10-9S17.52 3 12 3z"/>
        </svg>
      </button>
    </div>
  );
}

export default App;
