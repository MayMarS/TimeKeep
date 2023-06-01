# Online store on React for a watch brand

The TimeKeep is a non-commercial online store made for learning purpose. It is created in order to browse and purchase watches and jewelry.

Link: https://maymars.github.io/TimeKeep

## Project Description

The online store is made for educational purposes.
The project aims to provide a user-friendly and visually appealing interface for customers to explore and buy goods.
It is adaptive for different screen sizes and devices.

The functionality of the project is made by coding with JSX, reusing components,  applying basic React hooks, switching pages using routes, using Redux for state management, connecting third-party libraries, using REST APIs as database, to imitate server requests and responses.

## Technologies Used

HTML5/CSS3, SCSS, JavaScript, JSX, React, React Router, Redux Toolkit, REST API, Git/GitHub

## Project's Features

REST APIs are used as database (to generate custom data), to imitate server requests and responses (using https://mockapi.io/, https://my-json-server.typicode.com/).
This helps to simulate user's purchases of goods.
Data about products on the main page, product catalog, product details and product categories are displayed in the application through API requests and responses.

- Product Catalog: all products with their general data are displayed in the product catalog (Shop tab).
The details of each product can be viewed by going to the card of a specific product, which contains more detailed characteristics.

- Product Filtering and Sorting: products can be filtered and sorted on different criterias:
  -sorted by popularity, price low to high and high to low.
  -filtered by product's categories, gender. 

- Pagination: pagination has been added to the Product Catalog, which makes it possible to switch pages for the user convenience.

- Shopping Cart: functionality allows users to add items, update quantities, see the total quantity and the total amount of the order. 
The total number of products added to the cart is also displayed in the upper right corner of the application. 

- Viewed Products: the application displays the products already viewed by the user in a separate section Viewed Products. 

- Redux Toolkit: the Redux Toolkit was used to implement such functionallity as: cart, filtering, sort and pagination, list of viewed products.

- Local Storage: products added to the cart and viewed products are saved to local storage.
When the user returns to the app this allows to display in the cart previously added products and to display a list of previously viewed goods.

- Form Validation: sections containing fields for user input (Log In, Sign Up, Contact) are checked for the correctness of the entered information, which must match certain patterns. The form is not sent until it is filled out correctly (submission of the form is simulated).

- Adaptive Design: online store is accessible and looks great across different screen sizes and devices (desktop, tablet and mobile).

   In the future, the following features and enhancements are planned:

- Product Reviews and Ratings: allow users to leave reviews and ratings for products, providing valuable feedback for other customers.

- Wishlist: implement a wishlist functionality where users can save products for later and easily access them.

- Availability: allow users to browse available of goods, make reservations for them.

- Checkout: make the possibillity for checkout which allows users to purchase goods.

- User Authentication: implementing of user login and registration process to secure user data and provide a personalized experiences. 

## How to Install and Run the Project

### Prerequisites:
Node.js (from v18)

### Installation:

In a separate terminal:

1. Clone the repository (main branch):

git clone --branch main https://github.com/MayMarS/TimeKeep.git

2. Navigate to the project directory:

cd TimeKeep

3. Install the dependencies:

npm install

### Running the Application:

npm start

Open your browser and navigate to `http://localhost:3000` to access the web application.

* To work with custom data, APIs, server you can use Firebase, MockAPI, My JSON Server. For detailed instructions follow their official documentation.
