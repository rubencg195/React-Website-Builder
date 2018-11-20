import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

import Routes from "./Routes";
import NavbarComponent from "./components/navbar";
import FooterComponent from "./components/footer";

const navRoutes = {
    "Home" : "/",
    "Post" : "/post",
    "Posts" : "/posts",
    "Create Post" : "/post/create",
    "CSS" : "/css",
    "Components" : "/components",
    "Advanced" : "/advanced",
    "Navigation" : "/navigation",
    "Forms" : "/forms",
    "Tables" : "/tables",
    "Modals" : "/modals",

};
class App extends Component {
  render() {
    return (
      <Router>
        <div className="flyout">
          <NavbarComponent routes={navRoutes}/>
          <main style={{ marginTop: "5rem" }}>
            <Routes />
          </main>
          <FooterComponent link={"https://www.MDBootstrap.com"} description={"MDBootstrap.com"} year={new Date().getFullYear()} />
        </div>
      </Router>
    );
  }
}

export default App;
