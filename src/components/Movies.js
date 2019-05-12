import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
    <h1>Movies Page</h1>
      {movies.map(movie => <div><h3>{movie.title} {movie.time} {movie.genres} {movie.metascore}</h3></div>)}
    </div>
  );
};

export default Movies;
