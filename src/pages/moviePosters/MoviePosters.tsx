import React, {useEffect, useState} from 'react';
import './MoviePosters.css';


function MoviePosters() {
    const [movies, SetMovies] = useState([]);

    async function getMovies() {
        try{
            const response = await fetch('http://localhost:3000/catalog/movie-posters');
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getMovies().then((data) => {
            SetMovies(data);
        });
    },[])
  return (
    <div id="movie-posters">
        <h1>Movie Posters</h1>
        {movies.map((movie:any) => {
            return(
                <div>
                    {/* <img src={movie.image} alt={movie.title} /> */}
                    <h3>{movie.title}</h3>
                    <p>${movie.price}</p>
                </div>
            )
        })
        }
    </div>
  );
}

export default MoviePosters;
