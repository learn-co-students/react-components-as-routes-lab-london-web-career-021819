import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie => <div><h2>Title: {movie.title}</h2>
        <h4>Runtime: {movie.time}</h4>
        <h4>Genres: {movie.genres.map(genre => <li>{genre}</li>)}</h4>
        </div>)}
    </div>
  );
};

export default Movies;
