import React from "react";
import './App.css';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import TopNav from './components/Nav';
import Projects from './pages/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
      <TopNav/>
      <br></br>
      <div className="container">
          <Switch>
              <Route exact path="/ReactPortfolio/">
                <Home/>
              </Route>
              <Route exact path="/ReactPortfolio/Projects">
                <Projects />
              </Route>
              <Route exact path="*">
                <NoMatch />
              </Route>
          </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
