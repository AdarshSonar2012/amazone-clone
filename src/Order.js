import React from 'react'
import './Order.css'
import CheckoutProduct from './CheckoutProduct'
import CurrencyFormat from 'react-currency-format'
// import { useStateValue } from './StateProvider'

function Order({order}) {
  // const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className='order'>
      <h2>Order</h2>
      <p>{order.data.created}</p>
      <p className='order-id'>
        <small>{order.id}</small>
      </p>
      {order.data.basket.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hidebutton />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"} />
    </div>
  )
}

export default Order