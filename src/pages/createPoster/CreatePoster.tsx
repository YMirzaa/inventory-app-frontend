import React, { useEffect, useState } from 'react';
import './CreatePoster.css';


function CreatePoster() {
    const [genres, setGenres] = useState([]);
    
    async function fetchGenres() {
        try{
            const response = await fetch('http://localhost:3000/catalog/genres');
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        fetchGenres().then((data) => {
            setGenres(data);
        });
    }, []);

  return (
    <div id="create-poster">
        <h1>Create Poster</h1>
        <section>
            <form method='POST' className='poster-create-from' action='http://localhost:3000/catalog/movie-poster/create'>
                <div>
                    <label htmlFor="title">Title: </label>

                    <label htmlFor="price">Price: </label>
                    <label htmlFor="number_in_stock">Number In Stock: </label>
                </div>
                <div>

                    <input type="text" name="title" id="title" />
                    <input type="numeric" name="price" id="price" />     
                    <input type="numeric" name="number_in_stock" id="number_in_stock" />

                </div>
                {genres.map((genre:any) => {
                            return(<><label htmlFor={genre._id}> {genre.name}</label> <input type='checkbox' name='genre' value={genre._id}/></> )
                        }) }

                <button type="submit">Create</button>
            </form>
        </section>
    </div>  
  );
}

export default CreatePoster;
