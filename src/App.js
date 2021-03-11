import React from "react";
import './App.css';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import TopNav from './components/Nav';
import Projects from './pages/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <TopNav/>
      <br></br>
      <div className="container">
          <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route exact path="/Projects">
                <Projects />
              </Route>
              <Route exact path="*">
                <NoMatch />
              </Route>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
