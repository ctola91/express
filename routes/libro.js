const express = require('express');
const { getAutor, addAutor } = require('../services/AutorService');
const app = express();

app.get('/libros', async (req, res) => {
    try {
        let from = req.params.from || 0;
        from = Number(from);
        let limit = req.params.limit || 3;
        limit = Number(from);
        attributes = 'id nombre edad nacionalidad';
        return res.status(200).json(await getAutor(from, limit, null, attributes));
    } catch (e) {
        console.log(e);
        res.json({
            message: e.message
        });
    }
});

app.post('/libros', async (req, res) => {
    //console.log(req.body);
    try {
        let body = req.body;
        const autor = await addAutor(body);
        return res.status(201).json(autor);
    } catch (e) {
        console.log(e);
        return res.json({
            message: e.message
        });
    };
});

module.exports = app;