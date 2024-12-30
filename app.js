
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;  // Puedes cambiar el puerto si lo deseas

// Servir archivos estáticos (como index.html) desde una carpeta pública
app.use(express.static(path.join(__dirname, 'public')));

// Si quieres que el archivo index.html se sirva en la raíz
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/weather/:city', async (req, res) => {
    let city = req.params.city;
    let url = `https://api.weatherapi.com/v1/current.json?key=40db190f395f458385d125137243012&q=${city}&aqi=no`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return res.json(data);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
});



// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
