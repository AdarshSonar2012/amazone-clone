import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          className="checkout-ad"
          alt=""
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonKarigar/Saheli_store_banner.png"
        />
        <div>
          <h3>Hello,{user && user.email}</h3>
          {/* {user?.email ? <h3>user.email</h3> : <h3>hello</h3>} */}
          <h2 className="checkout-title">Your Shopping basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
