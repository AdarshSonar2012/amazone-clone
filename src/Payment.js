import React, { useEffect, useState } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer.js";
import axios from "./axios";
import { useNavigate } from "react-router-dom";
import { db } from "./Firebase";
import { paymentIntent } from "@stripe/stripe-js";
import { setDoc } from "firebase/firestore";
import { doc,addDoc} from "firebase/firestore";
const promise = loadStripe(
  "pk_test_51NXlQYSGpBilv2OQWMtFdj7D88OkR9k0LkMxwgw3ToBuoeukYVdUYOXcLvrAimzjBHApX4aTGavhgAbDOOBRiaZt00gFawE1EQ"
);
function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

useEffect( () => {
    const getClientSecret = async () => {
        const response = await axios({
          method:"post",
          url:`/payments/create?total=${Math.trunc(getBasketTotal(basket) * 100)}`
    });
    setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
    }, [basket]);

  console.log("The Secret Is >>>", clientSecret);
  console.log("**",user);
  

  const handleSubmit = async (event) => {
    //stripe stuff
    event.preventDefault();
    setProcessing(true);
    const payload= await stripe.confirmCardPayment(clientSecret,{
      payment_method:{
        type: 'card', 
        card: elements.getElement(CardElement),
      }}
      ).then(({paymentIntent}) => {
          const Ref=doc(db,"users",user && user.uid,"orders",paymentIntent.id)
          try{setDoc(Ref,
              {basket: basket,
              amount: paymentIntent.amount,
              created: paymentIntent.created}
              );

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type:"EMPTY_BASKET",
        })

        navigate('/orders',{replace: true});
      }catch(err){
        console.log('This is the error',err)
      }
      })
      .catch((err) => {
        console.log(err)
        alert(`Unable to process payment\nUse a sequence of "42" for card payment`)
        setError(null)
        setProcessing(false)
      })
  };
  const handleChange = (e) => {
    setDisabled(Event.empty);
    setError(Event.error ? Event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment-container">
        <h1>
          Checkout (
          {<Link to="/checkout">{basket && basket.length} items</Link>})
        </h1>

        <div className="payment-section">
          <div className="payment-title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment-address">
            <p>{user && user.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles</p>
          </div>
        </div>

        <div className="payment-section">
          <div className="payment-title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment-item">
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

        <div className="payment-section">
          <div className="payment-title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment-details">
            {/* stripe things */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment-priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeperator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Payment;
