import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

// Carrega variáveis de ambiente do arquivo .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Instancia o cliente Gemini com sua chave
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

app.post('/pergunte-ao-gemini', async (req, res) => {
  const { pergunta } = req.body;
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: `Você é um consultor de moda. Sugira 2 looks para a ocasião: ${pergunta}`
    });
    return res.json({ resposta: response.text });
  } catch (err) {
    console.error('>>> ERRO COMPLETO GEMINI:', err);
    return res.status(500).json({
      erro: 'Falha ao chamar Gemini',
      detalhes: err.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
