import React from "react";

function Banner() {
  const backgroundImageUrl = "https://images.tcdn.com.br/img/img_prod/476013/1704292726_streetwear_banner_prison-baseball.jpg"; // Coloque aqui o link da sua imagem

  return (
    <div
      style={{
        position: "relative",
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        padding: "100px 20px 40px",
        textAlign: "center",
        minHeight: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* Overlay para escurecer a imagem e dar contraste ao texto */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      />
      {/* Conteúdo do banner */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>The Blockside</h1>
        <p style={{ fontSize: "1.2rem" }}>
          Roupas e acessórios streetwear — estilo que fala alto.
        </p>
      </div>
    </div>
  );
}

export default Banner;
