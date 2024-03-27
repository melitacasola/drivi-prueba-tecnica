import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Card = ({data}) => {
    return (
        <div className="card">
            <ul>
                {data?.map((peli) => (
                    <li key={peli.imdbID} className='m-8'>
                        <Link href={`/details/${peli.imdbID}`}>
                            <Image
                                src={peli.Poster}
                                alt="pelicula"
                                width={150}
                                height={150}
                            />

                            <h2>{peli.Title}</h2>

                            <p>año de lanzamiento: {peli.Year}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Card