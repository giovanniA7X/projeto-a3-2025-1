import React, { useState } from "react";

function Produto({ nome, preco, imagemPrincipal, imagemSecundaria }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: "100%",
        overflow: "hidden",
        cursor: "pointer",
        textAlign: "center",
      }}
    >
      <img
        src={hover ? imagemSecundaria : imagemPrincipal}
        alt={nome}
        style={{
          width: "100%",
          height: "475px",
          objectFit: "contain",
          display: "block",
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
