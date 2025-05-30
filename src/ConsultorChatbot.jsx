import { useState } from "react";
import "./ConsultorChatbot.css";

function ConsultorChatbot() {
  const [pergunta, setPergunta] = useState("");
  const [resposta, setResposta] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [respostaCompleta, setRespostaCompleta] = useState("");

  const enviarPergunta = async () => {
    if (!pergunta) return;
    setCarregando(true);
    setResposta("");
    try {
      const resp = await fetch("http://localhost:3000/pergunte-ao-gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pergunta }),
      });
      const data = await resp.json();
      const respostaLimpa = data.resposta.trim();
      const partes = respostaLimpa.split("\n\n");
      setResposta(partes[0]); // só o começo
      setRespostaCompleta(respostaLimpa);
    } catch (err) {
      setResposta("Erro ao obter resposta.");
    } finally {
      setCarregando(false);
    }
  };

  const detalharMais = () => setResposta(respostaCompleta);

  return (
    <div className="chatbot-container">
      <div className="chat-area">
        {respostaCompleta && (
          <div className="mensagem-bot">
            {respostaCompleta.split("\n").map((linha, index) => (
              <p key={index} style={{ marginBottom: "10px", lineHeight: "1.6" }}>
                {linha}
              </p>
            ))}
            <div className="botoes-pos-resposta">
              <button onClick={() => setPergunta("")}>Nova pergunta</button>
              <button onClick={() => navigator.clipboard.writeText(respostaCompleta)}>
                Copiar resposta
              </button>
            </div>
          </div>
        )}

        {carregando && <p className="digitando">Consultando Gemini...</p>}
      </div>

      <div className="input-area">
        <input
          type="text"
          value={pergunta}
          onChange={(e) => setPergunta(e.target.value)}
          placeholder="Pergunte ao nosso Chatbot!"
        />
        <button onClick={enviarPergunta}>Consultar</button>
      </div>
    </div>
  );
}

export default ConsultorChatbot;
