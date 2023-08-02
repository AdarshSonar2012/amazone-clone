import { Fragment, useEffect } from "react";
import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Order from "./Order";
import { auth } from "./Firebase";
import Orders from "./Orders.js";
import Payment from "./Payment.js";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const promise = loadStripe(
  "pk_test_51NXlQYSGpBilv2OQWMtFdj7D88OkR9k0LkMxwgw3ToBuoeukYVdUYOXcLvrAimzjBHApX4aTGavhgAbDOOBRiaZt00gFawE1EQ"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is >> ", authUser);
      if (authUser) {
        //user logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
        <Route
            path="/orders"
            element={
              <Fragment>
                <Header />
                <Orders />
              </Fragment>
            }
          />
          <Route
            path="/login"
            element={
              <Fragment>
                <Login />
              </Fragment>
            }
          />
          <Route
            path="/checkout"
            element={
              <Fragment>
                <Header />
                <Checkout />
              </Fragment>
            }
          />
          <Route
            path="/payment"
            element={
              <Fragment>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </Fragment>
            }
          />
          <Route
            path="/"
            element={
              <Fragment>
                <Header />
                <Home />
              </Fragment>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
