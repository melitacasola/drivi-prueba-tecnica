import { useEffect, useState } from "react";

/**
 * Hook para hacer llamadas asincronas a una api
 *
 * @hook
 * @param {string} url - la url del endpoint a usar
 */

export function useFetchApi(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return { data };
}


export const fetchPeliculaDetalle = async (peliculaId) => {
  
  const url = `https://www.omdbapi.com/?apikey=acb6d8ef&i=${peliculaId}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log('Data from fetchPeliculaDetalle:', data);
    return data;
    
  } catch (error) {
    console.error('Error fetching movie detail:', error);
    return null;
  }
};