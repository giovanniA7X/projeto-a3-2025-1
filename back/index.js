const express = require ('express')
const { GoogleGenAI } = require ('@google/genai')
const app = express()
app.use(express.json())

app.post('/pergunte-ao-gemini', async (req, res) => {
    const ai = new GoogleGenAI ({apiKey: "AIzaSyB7xfmO7fdA-VrwqYR83lVrpuxr9u73k-c"});
    const prompt = req.body.prompt
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt, 
    });
    res.json({"resposta": response.text})
})

app.listen(3000, () => console.log("Beleza, rodando"))