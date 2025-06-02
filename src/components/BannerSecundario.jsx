import React from "react";

function BannerSecundario({ imagem }) {
  return (
    <div style={{ marginTop: "40px" }}>
      <img
        src={imagem}
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
  );
}

export default BannerSecundario;