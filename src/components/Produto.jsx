import React from "react";

function Produto({ nome, preco, imagem }) {
  return (
    <div
      style={{
        width: "220px",
        background: "#fff",
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "16px",
        textAlign: "center",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <img
        src={imagem}
        alt={nome}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
          borderRadius: "8px",
          marginBottom: "12px",
        }}
      />
      <h3 style={{ fontSize: "1rem", fontWeight: "bold", marginBottom: "6px" }}>
        {nome}
      </h3>
      <p style={{ color: "#444", fontSize: "0.95rem" }}>R$ {preco}</p>
    </div>
  );
}

export default Produto;
