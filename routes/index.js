const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.json({
        message: 'Running'
    });
});
app.use(require('./libro'));
app.use(require('./autor'));
app.use(require('./carrito'));
module.exports = app;