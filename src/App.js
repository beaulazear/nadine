import './App.css';
import Home from './components/Home';
import Resume from './components/Resume';
import { Route, Switch } from 'react-router';
import Testimonials from './components/Testimonials';
import NavLinks from './components/NavLinks';

function App() {
  return (
    <div className="App">
      <NavLinks />
      <Switch>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/testimonials">
          <Testimonials />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
