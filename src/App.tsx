//import React from "react";
// import logo from "./logo.svg";
import "./App.scss";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Header } from "./component/header/Header";

// Pages
import { Home } from "./page/home/Home";
import { Games } from "./page/games/Games";
import { Projects } from "./page/projects/Projects";
import { AboutMe } from "./page/about-me/AboutMe";

// Apps
import { BrowserApp } from "./component/apps/browser/BrowserApp";
import { AboutMeApp } from "./component/apps/about-me/AboutMeApp";
import { ShowcaseApp } from "./component/apps/showcase/ShowcaseApp";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
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
          <AboutMe />
        </Route>
        <Route exact path="/apps/browser">
          <BrowserApp />
        </Route>
        <Route exact path="/apps/about-me">
          <AboutMeApp />
        </Route>
        <Route exact path="/apps/showcase">
          <ShowcaseApp />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
