import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import images from '../images/no-poster.jpg'

const apikey = '55d879d1038c8db5e6d18bf562277559';

const Results = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search).get('q');
  const [resultsData, setResultsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    if (params.length >= 3) {
      fetch(`https://api.themoviedb.org/3/search/movie?query=${params}&api_key=${apikey}`)
        .then(response => response.json())
        .then(data => {
          setResultsData(data.results)
          setLoading(false)
        })
        .catch(error => console.error(error));
    } else {
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=es-ES&sort_by=popularity.desc&page=1`)
        .then(response => response.json())
        .then(data => {
          setResultsData(data.results)
          setLoading(false)
        })
        .catch(error => console.error(error));
    }

  }, [params]);

  return (
    <>
      <div className="container mt-4">
        {loading ? (
          <div className='row justify-content-center'>
            <div className="col-6 text-center">
              <div className="spinner-border text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p>Cargando...</p>
            </div>
          </div>) : (
          <div className="row">
            {resultsData.map(movie => {
              const imageUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : images;
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

export default Results;

