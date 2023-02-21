import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";


function Header() {
  return (
    <div id="header">
        <Link to="/">Home</Link>
        <Link to="/movie-posters">Movie Posters</Link>
        <Link to="/movie-poster/create">Create Poster</Link>
        <Link to="/genres">Genres</Link>
        <Link to="/genre/create">Create Genre</Link>


    </div>
  );
}

export default Header;
