import React,{useState} from "react";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
//import logo from "./logo.png";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Menu from "./components/Menu";
import CreateSurvey from "./components/CreateSurvey";
import Published from "./components/Published";
import {Link} from "react-router-dom";


function App() {

  const [squestions,setSquestions]=useState([]);

  return (
    <>
      <div className="col-md-10 offset-md-1 col-12 text-center">
        <Router>
        {/*<Link to="/">
        <img alt="logo" src={logo} className="col-md-6" />
      </Link>*/}
          <Switch>
            <Route exact path="/" component={Menu} />
            <Route path="/create">
              <CreateSurvey squestions={squestions} setSquestions={setSquestions} />
            </Route>
            <Route path="/published">
              <Published squestions={squestions} />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;