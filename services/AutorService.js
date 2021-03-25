const AutorRepository = require('../MongoDBRepository/AutorRepository');

const getAutor = async(from, limit, filters,attributes) =>{
    const {count,rows} = await AutorRepository.getAutors(from, limit,filters,attributes);
    return {count, autors: rows};
}

const addAutor = async ({ nombre, edad, nacionalidad }) => {
    return await AutorRepository.addAutor({
        nombre,
        edad,
        nacionalidad
    });
};

module.exports = {
    getAutor,
    addAutor
}