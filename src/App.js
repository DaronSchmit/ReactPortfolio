import React from "react";
import './App.css';
import { HashRouter as Router, Route, Switch} from "react-router-dom";
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import TopNav from './components/Nav';
import Projects from './pages/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";


function App() {
  console.log(process.env.PUBLIC_URL);
  
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <TopNav/>
      <br></br>
      <div className="container">
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Projects" component={Projects}/>
              <Route component={NoMatch} status={404}/>
          </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
