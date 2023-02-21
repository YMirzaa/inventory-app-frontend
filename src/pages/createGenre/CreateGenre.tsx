import React from 'react';
import './CreateGenre.css';

function CreateGenre() {
  return (
    <div id="create-genre">
        <h1>Create Genre</h1>
        <section>
            <form method='POST' className='genre-create-from' action='http://localhost:3000/catalog/genre/create'>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name" />
                <button type="submit">Create</button>
            </form>
        </section>
    </div>  
  );
}

export default CreateGenre;
