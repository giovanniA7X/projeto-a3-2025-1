import { useState } from 'react';
import Produto from './components/Produto.jsx';
import Banner from './components/Banner.jsx';
import BannerSecundario from './components/BannerSecundario.jsx';
import logo from './assets/The_Blockside_Logo.png';
import ConsultorChatbot from './ConsultorChatbot.jsx';
import './App.css';
import Menu from './components/Menu.jsx';
import BotaoChat from './components/BotaoChat.jsx';
import { produtosDestaque, produtosFeminino } from './components/Produtos.js';
import bannerSecundario from './assets/bannerSecundario.png';
import Banner_TheBlockside from './assets/Banner_TheBlockside.png';
import Rodapé from './components/Rodape.jsx';


function App() {
  const [mostrarChat, setMostrarChat] = useState(false);

  const toggleChat = () => {
    setMostrarChat(!mostrarChat);
  };

  return (
    <div>

      <header className="header-container">
        <img src={logo} alt="Logo The Blockside" className="logo" />
        <div className="header-buttons">
          <button className="header-button">
            <i className="fa-solid fa-user"></i>
            Minha Conta
          </button>
          <button className="header-button">
            <i className="fa-solid fa-cart-shopping"></i>
            Carrinho
          </button>
        </div>
      </header>

      <Banner imagem={Banner_TheBlockside} />
      <Menu />

      <h2 style={{ textAlign: "center", margin: "30px 0" }}>DESTAQUES</h2>
      <div style={{
        padding: "0 8px",
        display: "grid",
        gap: "2px",
        gridTemplateColumns: "repeat(4, 1fr)",
        margin: "0",
      }}>
        {produtosDestaque.map((produto, index) => (
          <Produto
            key={index}
            nome={produto.nome}
            preco={produto.preco}
            imagemPrincipal={produto.imagemPrincipal}
            imagemSecundaria={produto.imagemSecundaria}
          />
        ))}
      </div>

      <BannerSecundario imagem={bannerSecundario} />

      <h2 style={{ textAlign: "center", margin: "30px 0" }}>FEMININO</h2>

      <div
        style={{
          padding: "0 8px",
          display: "grid",
          gap: "2px",
          gridTemplateColumns: "repeat(4, 1fr)",
          margin: "0",
        }}
      >
        {produtosFeminino.map((produto, index) => (
          <Produto
            key={index}
            nome={produto.nome}
            preco={produto.preco}
            imagemPrincipal={produto.imagemPrincipal}
            imagemSecundaria={produto.imagemSecundaria}
          />
        ))}
      </div>

      <Rodapé />

      {mostrarChat && <ConsultorChatbot />}

      <BotaoChat onClick={toggleChat} />
    </div>
  );
}

export default App;
