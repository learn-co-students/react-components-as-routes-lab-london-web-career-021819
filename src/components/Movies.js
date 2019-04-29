import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        { movies.map(movie => {
          return (
            <div>
              Title: {movie.title}, Running time: {movie.time} minutes.
              <ul>
                Genres:
                {movie.genres.map(genre => <li>{genre}</li>)}
              </ul>
            </div>
          )
        }) }
    </div>
  );
};

export default Movies;
