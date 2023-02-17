import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './css/app.css';
import './css/bootstrap.min.css'

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';
import Results from './pages/Results'




function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch >
          <Route exact path='/' component={Home} />
          <Route exact path='/detail/:id' component={Detail} />
          <Route exact path='/results' component={Results} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
