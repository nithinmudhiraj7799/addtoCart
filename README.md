This project implements a restaurant management system that allows users to view a menu, place orders, and view order history. It utilizes React for the frontend and can either load the menu from a static data file or fetch it from an external API.

1. Static Data Version


File Structure:

App.js:  Main application component.
OrderForm.js: Component for placing a new order.
OrderHistory.js: Component for displaying order history.
Menu.js: Component for displaying the list of dishes.
data.js: Contains static data for the dishes.


Key Functionalities:

State Management:

Uses React's useState to manage orders and dishes.
orders: Stores the orders placed by users.
dishes: Initially set to static data imported from data.js.

Order Submission:
The handleOrderSubmit function adds a new order to the orders state.

UI Components:
A header with the title "Restaurant Management."
A menu component that displays the available dishes.
An order history component that shows past orders.
A button to open the order form, which contains inputs for table number, contact number, date, and time.
User Experience:

Users can place orders through a modal form and view their past orders in a structured manner.
2. API Fetching Version
Key Changes:

Data Fetching:
The menu is fetched from an external API using axios in a useEffect hook.
This allows the app to dynamically display the latest dishes without needing to change static data files.

View Toggle:
Introduces a button that toggles between viewing the menu and viewing the order history.
Functionalities:

Similar to the static version but with the added benefit of dynamically fetching data from an API.
The fetching logic in the useEffect ensures that the menu data is loaded when the component mounts.

User Experience:

Enhanced user experience with the ability to view updated dishes from an external source.