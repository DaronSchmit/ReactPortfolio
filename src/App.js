import React from "react";
import './App.css';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './pages/Home';
import TopNav from './components/Nav';
import Bio from './components/Bio';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <TopNav/>
      <div className="container">
          <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route exact path="/Bio">
                <Bio />
              </Route>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
