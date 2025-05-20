import React from 'react';
import Produto from './components/Produto.jsx';
import Banner from './components/Banner.jsx';
import logo from './assets/The_Blockside_Logo.png'
import ConsultorChatbot from './ConsultorChatbot.jsx';


function App() {

  return (
    <div>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          backgroundColor: "#222",
          color: "#fff",
        }}
      >
        <img
          src={logo}
          alt="Logo The Blockside"
          style={{ height: "200px", objectFit: "contain" }}
        />

        {/* Barra de busca */}
        <input
          type="text"
          placeholder="Buscar produtos..."
          style={{
            padding: "8px 12px",
            borderRadius: "20px",
            border: "none",
            width: "300px",
            maxWidth: "100%",
          }}
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
      <ConsultorChatbot />
    </div>

  );
}

export default App
