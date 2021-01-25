import React from "react";
import "./../style/SearchReullt.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";

function SearchResult({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) {
  return (
    <div className="searchResult">
      <img src={img} alt="" />
      <FavoriteBorderIcon className="searchResult__heart" />
      <div className="searchResult__info">
        <div className="info__top">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>____</p>
          <p>{description}</p>
        </div>
        <div className="info__bottom">
          <div className="bottom__star">
            <StarIcon className="star" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className="bottom__price">
            <h2>{price}</h2>
            <p>${total} Total</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
