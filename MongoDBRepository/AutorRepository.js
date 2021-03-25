const mongoose = require('mongoose');
const Autor = require("../mongodb/autor");

const getAutors = async (from, limit, filters, attributes) => {
    const rows = await Autor.find(filters,attributes)
    .skip(from)
    .limit(limit)
    .exec();

    const count = await Autor.find(filters).count();
    return {rows, count};
};

const addAutor = async({nombre, edad, nacionalidad}) => {
    const autor = new Autor({nombre,edad,nacionalidad});
    return await autor.save();
};

module.exports = {
    getAutors,
    addAutor
}