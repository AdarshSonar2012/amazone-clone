import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating,hidebutton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removefromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="CheckoutProduct">
      <img alt="" className="CheckoutProduct-image" src={image} />

      <div className="CheckoutProduct-info">
        <p className="CheckoutProduct-title">{title}</p>
        <p className="CheckoutProduct-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="CheckoutProduct-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              // eslint-disable-next-line
              <p key={i}>⭐</p>
            ))}
        </div>
        {!hidebutton && (
        <button onClick={removefromBasket}>Remove from basket</button>

        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
