// import React from "react";
// import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
//import { Route, Switch } from "react-router-dom";
// import { Home } from "./page/home/Home";
// import { Header } from "./component/header/Header";
// import { Games } from "./page/games/Games";
import { Window } from "./component/window/Window";

function App() {
  return (
    <BrowserRouter>
      {/* <Header />
      <div id="content">
        <div className="page-wrap">
          <div className="vertical-center max-width">
            <Switch>
              <Route path="/">
                <Home />
              </Route>
              <Route path="/games">
                <Games />
              </Route>
            </Switch>
          </div>
        </div>
      </div> */}
      <Window />
    </BrowserRouter>
  );
}

export default App;
