import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.scss';
import HomePage from "./pages/Home";
import CustomCardPage from "./pages/CustomCard";

function App() {
  return (
    <div className="App theme-default">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/custom-card">
            <CustomCardPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
