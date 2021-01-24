import React from "react";
import "./../style/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";

function header() {
  return (
    <div className="header">
      <img
        className="header__icon"
        src="https://www.stickpng.com/img/download/580b57fcd9996e24bc43c513/image"
        alt=""
      />
      <div className="header__center">
        <input type="text" />
        <SearchIcon />
      </div>

      <div className="header__right">
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default header;
