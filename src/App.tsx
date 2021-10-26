//import React from "react";
// import logo from "./logo.svg";
import "./App.scss";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Home } from "./page/home/Home";
import { Header } from "./component/header/Header";
import { Games } from "./page/games/Games";
import { Window } from "./component/window/Window";

// Apps
import { BrowserApp } from "./component/apps/browser/BrowserApp";
import { Projects } from "./page/projects/Projects";
import { AboutMe } from "./component/apps/about-me/AboutMeApp";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Header />
          <div className="page-wrap">
            <div className="margin-auto max-width">
              <Home />
            </div>
          </div>
        </Route>
        <Route exact path="/games">
          <Header />
          <div className="page-wrap">
            <div className="margin-auto max-width">
              <Games />
            </div>
          </div>
        </Route>
        <Route exact path="/projects">
          <Header />
          <div className="page-wrap">
            <div className="margin-auto max-width">
              <Projects />
            </div>
          </div>
        </Route>
        <Route exact path="/about">
          <Header />
          <div className="page-wrap">
            <div className="margin-auto max-width">
              <Window />
            </div>
          </div>
        </Route>
        <Route exact path="/apps">
          <Window />
        </Route>
        <Route exact path="/apps/browser">
          <BrowserApp />
        </Route>
        <Route exact path="/apps/about-me">
          <AboutMe />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
