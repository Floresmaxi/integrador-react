import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Header() {
  const [search, setSearch] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/results?q=${encodeURIComponent(search)}`);
  };  

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    history.push(`/results?q=${encodeURIComponent(value)}`);
  };


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">MovFlix</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/favorites">Favoritos</a>
            </li>
          </ul>
          <form className="d-flex" onSubmit={handleSubmit}>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={handleSearch} />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
