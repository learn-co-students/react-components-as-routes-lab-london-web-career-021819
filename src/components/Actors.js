import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
    <h1>Actors Page</h1>
      {actors.map(actor => <div><h3>{actor.name} {actor.movies}</h3></div>)}
    </div>
  );
};

export default Actors;
