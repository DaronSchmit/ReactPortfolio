import React from "react";
import './App.css';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './pages/Home';
import Nav from './components/Nav';
import SideNav from './components/SideNav';

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <SideNav/>
      <div className="container">
          <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
