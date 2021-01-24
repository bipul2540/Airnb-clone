import React from "react";
import "./../style/Home.css";
import Banner from "./Banner";
import Card from "./Card";

function Home() {
  return (
    <div className="home">
      <Banner />

      <div className="home__sections">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="home__sections">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Home;
