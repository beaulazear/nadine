import './App.css';
import Home from './components/Home';
import Resume from './components/Resume';
import { Route, Switch } from 'react-router';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
