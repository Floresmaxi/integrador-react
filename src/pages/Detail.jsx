import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineStar } from 'react-icons/ai'
import images from '../images/no-poster.jpg'


const Detail = ({ match }) => {
  
  const movieId = match.params.id;
  const apikey = '55d879d1038c8db5e6d18bf562277559';
  const detailUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apikey}&language=es-ES`;

  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(detailUrl)
      .then(response => response.json())
      .then(data => {
        setMovie(data)
        setLoading(false)
      })
      .catch(error => console.error(error));
  }, [detailUrl]);

  const imageUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : images;
  return (
    <>
      <div className="container mt-5">
        {loading ? (
          <div className='row justify-content-center'>
            <div className="col-6 text-center">
              <div className="spinner-border text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p>Cargando...</p>
            </div>
          </div>) : (<div className="row">
            <div className="col-8 col-md-3 mx-auto">
              <img src={imageUrl} alt={movie.title} id="movieImg" className='rounded img-thumbnail' />
            </div>
            <div className="col-12 col-md-8 m-auto">
              <h2>Título: {movie.original_title}</h2>
              <p>Reseña: {movie.overview}</p>
              <h5>Géneros: {movie.genres && movie.genres.map(genre => genre.name).join(', ')}</h5>
              <p id="rating">
                <AiOutlineStar className="icono" />
                {movie.vote_average}
              </p>
              <Link to="/" className='btn btn-dark my-3'>Volver</Link>
            </div>
          </div>)}
      </div>
    </>
  );
};

export default Detail;




