import React, { useState } from 'react';
import Produto from './components/Produto.jsx';
import Banner from './components/Banner.jsx';
import logo from './assets/The_Blockside_Logo.png';
import ConsultorChatbot from './ConsultorChatbot.jsx';
import './App.css';
import Menu from './components/Menu.jsx';
import camisetaOversized from './assets/camisetaOversized.png';
import boneDadhat from './assets/boneDadhat.png';
import boneDadHatsecundario from './assets/boneDadHatsecundario.png';
import calçaJogger from './assets/calçaJogger.png';
import calçaJoggerSecundaria from './assets/calçaJoggersecundaria.png';
import camisetaOversizedSecundaria from './assets/camisetaOversizedSecundaria.png';
import shoulderBag1 from './assets/shoulderBag1.png';
import shoulderBag2 from './assets/shoulderBag2.png';
import bannerSecundario from './assets/bannerSecundario.png';
import Banner_TheBlockside from './assets/Banner_TheBlockside.png';




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
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          zIndex: 10,
        }}

      >
        <div
          style={{
            position: "absolute",
            top: "20px", // ou "0px" se quiser mais colado
            left: "20px",
          }}
        >
        <img
          src={logo}
          alt="Logo The Blockside"
          style={{ height: "150px", objectFit: "contain" }}
        />
        </div>
        <div
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            display: "flex",
            gap: "16px",
            alignItems: "center"
          }}
        >
          <button
            style={{
              backgroundColor: "transparent",
              color: "#fff",
              border: "none",
              fontSize: "16px",
              cursor: "pointer",
              textDecoration: "underline",
              display: "flex",
              alignItems: "center",
              gap: "6px"
            }}
          >
            <i className="fa-solid fa-user"></i>
            Minha Conta
          </button>
          <button
            style={{
              backgroundColor: "transparent",
              color: "#fff",
              border: "none",
              fontSize: "16px",
              cursor: "pointer",
              textDecoration: "underline",
              display: "flex",
              alignItems: "center",
              gap: "6px"
            }}
          >
            <i className="fa-solid fa-cart-shopping"></i>
            Carrinho
          </button>
        </div>
      </header >

      <Banner imagem={Banner_TheBlockside} />
      <Menu />

      <h2 style={{ textAlign: "center", margin: "30px 0" }}>Destaques</h2>
      <div style={{
        padding: "0 8px",
        display: "grid",
        gap: "2px",
        gridTemplateColumns: "repeat(4, 1fr)",
        margin: "0",
      }}>
        <Produto
          nome="Camiseta Oversized"
          preco="129,90"
          imagemPrincipal={camisetaOversized}
          imagemSecundaria={camisetaOversizedSecundaria}
        />
        <Produto
          nome="Boné Dadhat"
          preco="59,90"
          imagemPrincipal={boneDadhat}
          imagemSecundaria={boneDadHatsecundario}
        />
        <Produto
          nome="Calça Jogger"
          preco="89,90"
          imagemPrincipal={calçaJogger}
          imagemSecundaria={calçaJoggerSecundaria}
        />
        <Produto
          nome="Shoulder Bag"
          preco="79,90"
          imagemPrincipal={shoulderBag1}
          imagemSecundaria={shoulderBag2}
        />

      </div>
      <div style={{ marginTop: "40px" }}>
        <img
          src={bannerSecundario}
          alt="Banner Secundário"
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "600px",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      <h2 style={{ textAlign: "center", margin: "30px 0" }}>Feminino</h2>

      <div
        style={{
          padding: "0 8px",
          display: "grid",
          gap: "2px",
          gridTemplateColumns: "repeat(4, 1fr)",
          margin: "0",
        }}
      >
        <Produto
          nome="Camiseta Urban"
          preco="119,90"
          imagemPrincipal="/imgs/produtos/camiseta-urban-1.jpg"
          imagemSecundaria="/imgs/produtos/camiseta-urban-2.jpg"
        />
        <Produto
          nome="Moletom Oversized"
          preco="189,90"
          imagemPrincipal="/imgs/produtos/moletom-1.jpg"
          imagemSecundaria="/imgs/produtos/moletom-2.jpg"
        />
        <Produto
          nome="Bermuda Cargo"
          preco="99,90"
          imagemPrincipal="/imgs/produtos/bermuda-cargo-1.jpg"
          imagemSecundaria="/imgs/produtos/bermuda-cargo-2.jpg"
        />
        <Produto
          nome="Calça Techwear"
          preco="159,90"
          imagemPrincipal="/imgs/produtos/calca-tech-1.jpg"
          imagemSecundaria="/imgs/produtos/calca-tech-2.jpg"
        />
      </div>

      {mostrarChat && <ConsultorChatbot />}

      <button className="botao-consultor" onClick={toggleChat} aria-label="Abrir Chat">
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="28" height="28">
          <path d="M12 3C6.48 3 2 6.92 2 11.5c0 2.2 1.02 4.19 2.7 5.68L4 21l4.07-1.35C9.26 20.21 10.6 20.5 12 20.5c5.52 0 10-3.92 10-9S17.52 3 12 3z" />
        </svg>
      </button>
    </div >
  );
}

export default App;
