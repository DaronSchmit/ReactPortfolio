import React from "react";
import './App.css';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <div>
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
