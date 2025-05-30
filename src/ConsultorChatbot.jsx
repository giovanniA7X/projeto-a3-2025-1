import React, { useState } from "react";
import "./ConsultorChatbot.css";

function ConsultorChatbot() {
  const [pergunta, setPergunta] = useState("");
  const [listaLooks, setListaLooks] = useState([]);
  const [lookSelecionado, setLookSelecionado] = useState("");
  const [carregando, setCarregando] = useState(false);

  const enviarPergunta = async () => {
    if (!pergunta.trim()) return;
    setCarregando(true);
    setListaLooks([]);
    setLookSelecionado("");
    try {
      const resp = await fetch("http://localhost:3000/pergunte-ao-gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pergunta }),
      });
      const data = await resp.json();
      const raw = data.resposta.trim();
      // Extrai cada bloco 'Look X:' usando regex com matchAll
      const matches = Array.from(
        raw.matchAll(/(Look \d+:)([\s\S]*?)(?=Look \d+:|$)/g)
      );
      const items = matches.map((m) => `${m[1]} ${m[2].trim()}`);
      setListaLooks(items.length ? items : [raw]);
    } catch {
      setListaLooks(["Erro ao obter sugestões."]);
    } finally {
      setCarregando(false);
    }
  };

  // Função para renderizar título, listas ou parágrafos
  const renderBloco = (text) => {
    const sections = text.split(/\n\n/);
    return sections.map((sec, idx) => {
      if (/^Look \d+:/.test(sec)) {
        return <h4 key={idx} style={{ margin: '16px 0 8px' }}>{sec}</h4>;
      }
      if (sec.trim().startsWith('*')) {
        const lines = sec.split(/\n\*/).filter(l => l.trim());
        return (
          <ul key={idx} style={{ paddingLeft: '20px', marginBottom: '12px' }}>
            {lines.map((li, i) => (
              <li key={i} style={{ marginBottom: '6px' }}>{li.replace(/^\*+\s*/, '')}</li>
            ))}
          </ul>
        );
      }
      return <p key={idx} style={{ marginBottom: '10px', lineHeight: '1.6' }}>{sec}</p>;
    });
  };

  return (
    <div className="chatbot-container">
      <div className="chat-area">
        {carregando && <p className="digitando">Consultando Gemini...</p>}

        {!carregando && listaLooks.length > 0 && (
          <div className="lista-looks">
            <p>👗 Selecione um look sugerido:</p>
            {listaLooks.map((look, idx) => (
              <button
                key={idx}
                className="botao-look"
                onClick={() => setLookSelecionado(look)}
              >
                Look {idx + 1}
              </button>
            ))}
          </div>
        )}

        {lookSelecionado && (
          <div className="detalhe-look mensagem-bot">
            {renderBloco(lookSelecionado)}
            <button onClick={() => setLookSelecionado("")}>Voltar à lista</button>
          </div>
        )}
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
