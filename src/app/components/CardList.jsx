"use client"

import {useFetchApi} from "../useFetchApi";
import filterData from "../utils";

import Card from "./Card";


const CardList = ({ searchQuery }) => {

    const apiKey = 'acb6d8ef';
    const query = 'avengers';
    const page = 1;

    const urlApi = `https://www.omdbapi.com/?apikey=${apiKey}&type=movie&s=${query}&page=${page}`

    const { data, loading, error } = useFetchApi(urlApi);

    // console.log(data);
    const filteredPelicula = filterData(data.Search, searchQuery)
    // console.log(filteredPelicula);



    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>

            {/* {filteredPelicula.length > 0 ? (<Card data={filteredPelicula} />) : (<Card data={data} />)} */}
            <Card data={filteredPelicula} />


        </div>
    )
}

export default CardList