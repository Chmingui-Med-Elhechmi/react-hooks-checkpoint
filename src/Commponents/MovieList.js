import React, { useState } from "react";
import Add from "./Add";
import MovieCard from "./MovieCard";


function MovieList({ movies,addMovie }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow}>Add</button>
      <Add show={show} handleClose={handleClose} addMovie={addMovie}/>
      

      {movies.map((movie) => (
        <div className="image-container">
          <MovieCard movies={movie} />
        </div>
      ))}
    </>
  );
}

export default MovieList;
