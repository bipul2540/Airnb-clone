import { Button } from "@material-ui/core";
import React from "react";
import "./../style/SearchPage.css";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays . 26 augest to 30 augest . 2 guest</p>
        <h1>Stays nearby</h1>
        <div className="searchPage__buttons">
          <Button variant="outlined"> Cancelation flexibility</Button>
          <Button variant="outlined"> Type of place</Button>
          <Button variant="outlined">Price</Button>
          <Button variant="outlined"> Rooms and Beda</Button>
          <Button variant="outlined"> More filter</Button>
        </div>
      </div>
      <SearchResult
        img="https://media-cdn.tripadvisor.com/media/photo-s/0e/cc/0a/dc/restaurant-chocolat.jpg"
        title="Resturant chocolate stay with choices."
        location="Breda-city-Menu 45533"
        description="1 guest . 1 bedroom . 1 bed . wifi . kitchen"
        star={4}
        price="$45/night"
        total={344}
      />
      <SearchResult
        img="https://media-cdn.tripadvisor.com/media/photo-s/0e/cc/0a/dc/restaurant-chocolat.jpg"
        title="Resturant chocolate stay with choices."
        location="Breda-city-Menu 45533"
        description="1 guest . 1 bedroom . 1 bed . wifi . kitchen"
        star={4}
        price="$45/night"
        total={344}
      />
      <SearchResult
        img="https://media-cdn.tripadvisor.com/media/photo-s/0e/cc/0a/dc/restaurant-chocolat.jpg"
        title="Resturant chocolate stay with choices."
        location="Breda-city-Menu 45533"
        description="1 guest . 1 bedroom . 1 bed . wifi . kitchen"
        star={4}
        price="$45/night"
        total={344}
      />
      <SearchResult
        img="https://media-cdn.tripadvisor.com/media/photo-s/0e/cc/0a/dc/restaurant-chocolat.jpg"
        title="Resturant chocolate stay with choices."
        location="Breda-city-Menu 45533"
        description="1 guest . 1 bedroom . 1 bed . wifi . kitchen"
        star={4}
        price="$45/night"
        total={344}
      />
      <SearchResult
        img="https://media-cdn.tripadvisor.com/media/photo-s/0e/cc/0a/dc/restaurant-chocolat.jpg"
        title="Resturant chocolate stay with choices."
        location="Breda-city-Menu 45533"
        description="1 guest . 1 bedroom . 1 bed . wifi . kitchen"
        star={4}
        price="$45/night"
        total={344}
      />
    </div>
  );
}

export default SearchPage;
