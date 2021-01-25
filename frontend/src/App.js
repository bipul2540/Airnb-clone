import React from "react";
import Home from "./component/Home";
import Header from "./component/Header";
import "./style/App.css";
import Footer from "./component/Footer";
import { Route, Switch } from "react-router-dom";
import SearchPage from "./component/SearchPage";

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" exact component={SearchPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
