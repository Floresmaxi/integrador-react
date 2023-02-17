import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import images from '../images/no-poster.jpg'
import '../css/app.css'
import '../css/bootstrap.min.css'


const apikey = '55d879d1038c8db5e6d18bf562277559';
const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=es-ES&sort_by=popularity.desc&page=1`;

const Home = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setMoviesData(data.results)
        setLoading(false)
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      <div className="container my-4">  
        {loading ? (
          <div className='row justify-content-center'>
            <div className="col-6 text-center">
              <div className="spinner-border text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p>Cargando...</p>
            </div>
          </div>) : (
          <div className="row" >
            {moviesData.map(movie => {
              const imageUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : images ;
              return (
                <div className="col-6 col-sm-6 col-lg-4  my-3 " key={movie.id}>
                  <div className="card h-100">
                    <Link to={`/detail/${movie.id}`} className="link">
                      <img src={imageUrl} alt={movie.title} className="card-img-top" />
                      <div className="card-body">
                        <h5 className="card-title one-line-title">{movie.original_title}</h5>
                        <p className="card-text">{movie.overview.substr(0, 80).trim()}...</p>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;

