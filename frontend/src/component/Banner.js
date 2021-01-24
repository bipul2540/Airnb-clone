import React, { useState } from "react";
import "./../style/Banner.css";
import { Button } from "@material-ui/core";
import DatePicker from "./DatePicker";

function Banner() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <DatePicker />}

        <Button
          className="banner__searchButton"
          variant="outlined"
          onClick={() => setShowSearch(!showSearch)}
        >
          {!showSearch ? "Search Dates" : "Hide"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Get out and stretch your imagination.</h1>
        <h5>
          Plan a diferent kind of gateway to uncover the hidden gems near you.
        </h5>
        <Button variant="outlined">Explore Nearby</Button>
      </div>
    </div>
  );
}

export default Banner;
