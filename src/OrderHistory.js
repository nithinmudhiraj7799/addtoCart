import React from 'react';

const OrderHistory = ({ orders }) => {
  console.log(orders); // Log the orders to inspect their structure

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Order History</h2>
      {Array.isArray(orders) && orders.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        <ul className="space-y-4">
          {orders.map((order, index) => (
            <li key={index} className="border rounded-lg p-4 shadow-lg">
              <h4 className="font-semibold">Order {index + 1}</h4>
              <p>Table Number: {order.tableNumber}</p>
              <p>Contact Number: {order.contactNumber}</p>
              <p>Date: {order.date}</p>
              <p>Time: {order.time}</p>
              <p className="font-semibold">Dishes:</p>
              {Array.isArray(order.dishes) && order.dishes.length > 0 ? (
  <div>
    <ul className="list-disc ml-4">
      {order.dishes.map((dish, idx) => (
        <li key={idx}>
          {dish.dish.name} - ${dish.dish.price.toFixed(2)} x {dish.quantity} 
        </li>
      ))}
    </ul>
    <div className="mt-4">
   
      <p>Total Items: {order.dishes.reduce((total, dish) => total + dish.quantity, 0)}</p>
      <p>
        Total Price: $
        {order.dishes.reduce((total, dish) => total + (dish.dish.price * dish.quantity), 0).toFixed(2)}
      </p>
    </div>
  </div>
) : (
  <p>No dishes found for this order.</p>
)}


            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderHistory;
