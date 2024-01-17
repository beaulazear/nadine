import Home from './components/Home';
import { Route, Switch } from 'react-router';
import Intraconnect from './components/Intraconnect';
import Interconnect from './components/Interconnect';
import NavLinks from './components/NavLinks';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div>
      <NavLinks />
      <Switch>
        <Route path="/Intraconnect">
          <Intraconnect />
        </Route>
        <Route path="/Interconnect">
          <Interconnect />
        </Route>
        <Route path="/ContactUs">
          <ContactUs />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
