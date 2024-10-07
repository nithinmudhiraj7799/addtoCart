
//   static Data


import React, { useState } from 'react';
import OrderForm from './OrderForm';
import OrderHistory from './OrderHistory';
import Menu from './Menu';
import Data from './data';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const [orders, setOrders] = useState([]);
  const [dishes, setDishes] = useState(Data);
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);

  const handleOrderSubmit = (newOrder) => {
    setOrders((prevOrders) => [...prevOrders, { ...newOrder, dishes: [] }]);
  };

  return (
    <div className="App min-h-screen flex flex-col">
      <ToastContainer/>
      <header className="bg-blue-600 text-white p-4 text-center shadow-lg">
        <h1 className="text-3xl font-bold">Restaurant Management</h1>
      </header>
      <main className="container mx-auto p-4 flex-grow">
        <Menu dishes={dishes} orders={orders} setOrders={setOrders} setDishes={setDishes} />
        <OrderHistory orders={orders} />
        
       
        {/* <button onClick={() => setIsOrderFormOpen(true)} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Place New Order
        </button> */}

       
        {isOrderFormOpen && (
          <OrderForm 
            onSubmit={handleOrderSubmit} 
            onClose={() => setIsOrderFormOpen(false)} 
          />
        )}
      </main>
    </div>
  );
};

export default App;



// ////  //  below code  with api-Fetching


// import React, { useState, useEffect } from 'react';
// import Menu from "./Menu";
// import OrderHistory from './OrderHistory';
// import axios from 'axios';

// const App = () => {
//   const [orders, setOrders] = useState([]);
//   const [dishes, setDishes] = useState([]); // Moved dishes state here
//   const [viewOrderHistory, setViewOrderHistory] = useState(false);

//   useEffect(() => {
//     const fetchDishes = async () => {
//       const response = await axios.get("https://api.jsonbin.io/v3/b/66faa41facd3cb34a88ed968");
//       setDishes(response.data);
//     };
//     fetchDishes();
//   }, []);

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <div className="container mx-auto p-4">
//         <h1 className="text-3xl font-bold mb-4">Restaurant Order System</h1>
//         <button 
//           className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mb-4"
//           onClick={() => setViewOrderHistory(!viewOrderHistory)}
//         >
//           {viewOrderHistory ? 'View Menu' : 'View Order History'}
//         </button>
//         {viewOrderHistory ? (
//           <OrderHistory orders={orders} />
//         ) : (
//           <Menu dishes={dishes} orders={orders} setOrders={setOrders} setDishes={setDishes} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;


