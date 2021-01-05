import Home from './components/home';
import NavBar from './components/navbar';
import Footer from './components/footer';
import { Route, Switch } from 'react-router-dom';
import Places from './pages/places';
import About from './pages/about';

const App = () => {
  return (
    <Switch>
      <Route path='/' exact>
        <NavBar />
        <Home />
        <Footer />
      </Route>
      <Route path='/places' exact>
        <Places />
      </Route>
      <Route path='/about' exact>
        <About />
      </Route>
    </Switch>
  );
};

export default App;
