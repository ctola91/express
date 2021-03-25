const express = require('express');

const app = express();

app.get('/carrito', (req,res) => {
    res.json({
        message: 'estas en las rutas carrito'
    });
});

module.exports = app;