const express = require('express');

const app = express();

app.get('/autors', (req,res) => {
    res.json({
        message: 'estas en las rutas autor'
    })
});

module.exports = app;