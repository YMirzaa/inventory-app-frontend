import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {Home, MoviePosters, CreatePoster, CreateGenre, Genres} from './pages'
import {Header} from './components'

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/movie-posters" element={<MoviePosters/>}/>
          <Route path="/movie-poster/create" element={<CreatePoster/>}/>
          <Route path="/genres" element={<Genres/>}/>
          
          <Route path="/genre/create" element={<CreateGenre/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
