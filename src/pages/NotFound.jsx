import { Link } from 'react-router-dom';
import '../css/notFound.css';

const NotFound = () => {
  return (
    <div id="oopss">
      <div id="error-text">
        <img
          src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
          alt="404"
        />
        <span>404 PAGE</span>
        <p className="p-a">
          .La página que estabas buscando no se pudo encontrar
        </p>
        <p className="p-b">... Vuelve a la página anterior</p>
        <Link to="/" className="back">
          ... Volver
        </Link>
      </div>
    </div>
  );
};

export default NotFound;