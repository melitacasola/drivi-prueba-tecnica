This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

ENUNCIADO:

------------------------ CONSTRUYE UN MOSAICO DE PELÍCULAS ------------------------------------------------- ------------------------ Duración Máxima: 60 minutos --------------------------------------------------------

1 - Reglas: ------ 1.1 - Puedes consultar documentación y buscar em google ----------------------------------------------
------ 1.2 - No puedes usar herramientas de inteligencia artificial como ChatGPT o Copilot ------------------ ------ 1.3 - Puedes usar los paquetes y frameworks que creas convenientes -----------------------------------

2 - Objetivo: 2.1 - Desarrollar una aplicación en React que permita a los usuarios buscar películas utilizando la API de OMDb (Open Movie Database). La aplicación debe presentar los resultados en un formato de mosaico y permitir a los usuarios ver detalles de películas específicas.

3 - Requisitos:

3.1 - Pantalla Principal: 3.1.1 - Implementa un campo de búsqueda para que los usuarios puedan buscar películas por título. 3.1.2 - Muestra los resultados de la búsqueda en un mosaico, donde cada elemento del mosaico representa una película. Cada elemento debe incluir al menos la imagen de la película, el título y el año de lanzamiento.

3.2 - Pantalla de Detalles de la Película: 3.2.1 - Al hacer clic en una película del mosaico, el usuario debe ser dirigido a una pantalla de detalles de la película.

3.3 - Conexión con la API de OMDb: 3.3.1 - Utiliza la API de OMDb para buscar películas y obtener detalles específicos de cada película. Documentación de la API: http://www.omdbapi.com/

3.4 - API movies:
https://www.omdbapi.com/?apikey=acb6d8ef&type=movie&s={query}&page={page}

Ejemplo:  
https://www.omdbapi.com/?apikey=acb6d8ef&type=movie&s=avengers&page=1
4 - Extras (Opcionales): 4.1 - Si completas los requisitos básicos y aún tienes tiempo, considera añadir una o más de las siguientes funcionalidades para mejorar tu aplicación: 4.1.1 - Añadir/Eliminar Películas: Permite a los usuarios añadir películas a un listado de favoritos o eliminarlas de este. 4.1.2 - Manejo de Errores: Implementa una gestión adecuada de errores, como búsquedas que no devuelven resultados o problemas de conexión con la API. 4.1.3 - Filtros de Búsqueda: Añade filtros para refinar las búsquedas, como por año, género o director. 4.1.4 - Diseño y UX: Mejora la interfaz de usuario y la experiencia del usuario con un diseño más atractivo, animaciones o transiciones suaves.