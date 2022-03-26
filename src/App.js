import React from "react";
import './App.css';
// import { HashRouter as Router, Route, Switch} from "react-router-dom";
import Home from './pages/Home';
// import NoMatch from './pages/NoMatch';
// import TopNav from './components/Nav';
// import Projects from './pages/Projects';
import Footer from "./components/Footer";
// import ContactMe from "./pages/ContactMe";


function App() {
 
  return (
    <>
      <div className="container">
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default App;
