const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

// Instância com sua chave da API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/pergunte-ao-gemini', async (req, res) => {
  try {
    const prompt = req.body.prompt;

    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    res.json({ resposta: text });
  } catch (error) {
    console.error('Erro:', error.message);
    res.status(500).json({ erro: 'Erro ao consultar Gemini' });
  }
});

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));
