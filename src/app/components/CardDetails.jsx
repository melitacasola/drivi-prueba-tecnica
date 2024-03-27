'use client'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { fetchPeliculaDetalle } from '../useFetchApi';

const CardDetails = ({imdbID}) => {
    
    const [peliDetalle, setPeliDetalle] = useState(null);
    console.log('esto llega', imdbID);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchPeliculaDetalle(imdbID);

                console.log('response', response);

                setPeliDetalle(response);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData()
    }, [imdbID]);

    if (!peliDetalle) {
        return <div>Cargando...</div>;
    }

    return (
        <div className='m-8'>
            <h1 className='text-2xl font-semibold text-green-950 mb-4'>{peliDetalle.Title}</h1>
            <img src={peliDetalle.Poster} alt={peliDetalle.Title} />
            <p className='m-4'>Año de lanzamiento: {peliDetalle.Year}</p>
            <p className='m-4'>Trama: {peliDetalle.Plot}</p>
            
        </div>
    );
};

export default CardDetails;
