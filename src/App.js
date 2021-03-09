import React from "react";
import './App.css';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './pages/Home';
import TopNav from './components/Nav';
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
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
