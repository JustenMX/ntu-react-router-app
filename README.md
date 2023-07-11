## NTU SCTP in Software Engineering

## Module 2.8 Assignment

### React Router

### Brief

React web application that leverages the power of React Router hooks. With this project, you'll explore how to create dynamic and interactive user interfaces using React Router. The application utilizes React's component-based architecture to seamlessly navigate between different pages and routes. Whether you're new to React or looking to enhance your skills in React Router, this project provides valuable insights and practical examples.

### Implement the Add Product Page

Expand on the `Add` component route to allow the user to create a new
product.

1. Create an input form to enter product details
   - Name
   - Quantity
   - Price
   - Discount
2. Create a handler function to add a new product item into the state list,
   e.g. `handlerAddProduct()`
3. Create an _Add_ button that shall call the add product handler
4. After adding a new product, automatically switch to the `View` page to show
   the new product added to the list.

### Optional Challenge: Implement an Edit Product Page (advanced)

Create a new `Edit` component route to allow the user to edit a current product.

1. Create an _Edit_ button on the `Item` page that shall call the edit handler.
2. Create an edit handler function to fill in product details into an `Edit` form,
   e.g. `handlerEditProduct()`
3. Create an _Submit_ button on the `Edit` form that shall call the submit handler
4. Create a form submit handler function update the current item record in the state
   list, e.g. `handlerEditProduct()`
5. After submission, automatically return to the `View` page.

> work in progress

### Currently Working On:

- handler submit for the AddProduct (I am trying to include a valdiation check where all input fields needs to be filled up before allowed for submission and state updates)
