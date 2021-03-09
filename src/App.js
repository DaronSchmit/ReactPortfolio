import React from "react";
import './App.css';
import { BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav/>
          <Switch>
              <Route exact path="/">
                <Books />
              </Route>
              <Route path="*">
                <NoMatch />
              </Route>
          </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
