const filterData = (peliculasData, searchParam) => {
    let filteredPeliculas;

    if (Array.isArray(peliculasData) && searchParam) {
        filteredPeliculas = peliculasData.filter((el) => {
            const conditional = el.Title.toLowerCase().includes(
                searchParam.toLowerCase(),
            );
            return conditional;
        });
    } else {
        filteredPeliculas = peliculasData;
    }
    console.log('Resultados de búsqueda:', filteredPeliculas);
    return filteredPeliculas;
};

export default filterData;

