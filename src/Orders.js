import React, { useState,useEffect } from 'react'
import './Orders.css'
import { db } from './Firebase';
import {query,collection, onSnapshot, orderBy} from 'firebase/firestore'
import Order from './Order';
import { useStateValue } from './StateProvider';

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders,setOrders]= useState([]);

  useEffect(() => {
    if(user){
    const collRef = collection(db, "users", user&& user.uid, "orders");
      const orderedRef = query(collRef, orderBy("created", "desc"));
      onSnapshot(orderedRef, (querySnapshot) => {
        setOrders(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    } else {
      setOrders([])
    }
  }, [user])
  return (
    <div className='orders'>
      <h1>Your Orders</h1>
      <div className='orders-order'>
        {orders && orders.map((order) => (
        <Order order={order}/>
        ))}
      </div>
    </div>
  )
}

export default Orders
