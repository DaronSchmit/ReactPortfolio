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
    <BrowserRouter basename={process.env.PUBLIC_URL}>
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
      <Footer />
    </BrowserRouter>
  );
}

export default App;
