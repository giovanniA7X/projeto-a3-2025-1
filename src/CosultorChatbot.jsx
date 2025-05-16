import { useState } from 'react';

function ConsultorChatbot() {
  const [aberto, setAberto] = useState(false);
  const [pergunta, setPergunta] = useState('');
  const [resposta, setResposta] = useState('');
  const [loading, setLoading] = useState(false);

  const enviarPergunta = async () => {
    if (!pergunta.trim()) return;
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5173/pergunte-ao-gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },    
        body: JSON.stringify({ pergunta }),
      });
      const data = await res.json();
      setResposta(data.resposta);
    } catch (err) {
      setResposta('Erro ao consultar o estilo.');
    }
    setLoading(false);
  };

  return (
    <>
      {/* Botão flutuante */}
      <button
        onClick={() => setAberto(!aberto)}
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          padding: '12px 16px',
          borderRadius: '50px',
          backgroundColor: '#000',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          zIndex: 1000,
        }}
      >
        Consultor de Moda
      </button>

      {/* Janela do Chat */}
      {aberto && (
        <div
          style={{
            position: 'fixed',
            bottom: 80,
            right: 20,
            width: '300px',
            padding: '16px',
            borderRadius: '10px',
            backgroundColor: '#fff',
            boxShadow: '0 0 10px rgba(0,0,0,0.2)',
            zIndex: 1000,
          }}
        >
          <h4 style={{ margin: '0 0 10px 0' }}>Seu Estilo, sua escolha!</h4>
          <input
            type="text"
            value={pergunta}
            onChange={(e) => setPergunta(e.target.value)}
            placeholder="Ex: Look para balada..."
            style={{
              width: '100%',
              padding: '8px',
              marginBottom: '8px',
              borderRadius: '6px',
              border: '1px solid #ccc',
            }}
          />
          <button
            onClick={enviarPergunta}
            disabled={loading}
            style={{
              width: '100%',
              padding: '8px',
              backgroundColor: '#222',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              marginBottom: '8px',
            }}
          >
            {loading ? 'Consultando...' : 'Consultar'}
          </button>
          <div
            style={{
              backgroundColor: '#f9f9f9',
              padding: '10px',
              borderRadius: '6px',
              minHeight: '50px',
              whiteSpace: 'pre-wrap',
              fontSize: '14px',
              color: '#333',
            }}
          >
            {resposta}
          </div>
        </div>
      )}
    </>
  );
}

export default ConsultorChatbot;
