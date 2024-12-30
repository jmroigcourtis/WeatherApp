import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 3000;


app.get('/api/weather/:city', (req, res) => {

    let city = req.params.city;
    let url = `https://api.weatherapi.com/v1/current.json?key=40db190f395f458385d125137243012&q=${city}&aqi=no`;
    try {
        fetch(url)
            .then(response => response.json())
            .then(data => {return res.json(data)})
            .catch(error => res.status(500).json({ error: error }));
    } catch (error) {
        console.error(error);
    }

})


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});