import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut().then(() => {
        console.log("Signed out successfully");
      });
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header-logo"
          alt=""
          src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
        />
      </Link>
      <div className="header-search">
        <input className="header-searchinput" />
        <SearchIcon className="header-searchicon" />
      </div>

      <div className="header-nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header-option">
            <span
              style={{ textdecoration: "none" }}
              className="header-optionlineone"
            >
              Hello {!user ? "User" : user.email}{" "}
            </span>
            <span
              style={{ textdecoration: "none" }}
              className="header-optionlinetwo"
            >
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to='/orders'>
        <div className="header-option">
          <span className="header-optionlineone">Returns</span>
          <span className="header-optionlinetwo">& Orders</span>
        </div>
        </Link>

        <div className="header-option">
          <span className="header-optionlineone">Your</span>
          <span className="header-optionlinetwo">Prime</span>
        </div>
        <Link to="/Checkout">
          <div className="header-optionbasket">
            <ShoppingBasketIcon />
            <span
              style={{ textdecoration: "none" }}
              className="header-optionlinetwo header-basketcount"
            >
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
