# Book-Chor (Book-Store)

> Built Book-Store By MERN Stack


## Features

- Fully Featured Shopping Cart
- Books Reviews and Ratings
- Top Books Carousel
- Books (Product) pagination
- Books Search Feature
- User Profile with Orders
- Admin Books Management
- Admin User Management
- Admin Order Details Page
- Mark Orders as Delivered Option
- Checkout Process (Shipping, Payment Method)
<!-- - PayPal / Credit Card Integration -->
- Database Seeder (Books & Users)

## Usage

### ES Modules in Node

We use ECMAScript Modules in the backend in this project. Be sure to have at least Node v14.6+ or you will need to add the "--experimental-modules" flag.

Also, when importing a file (not a package), be sure to add .js at the end or you will get a "module not found" error

You can also install and setup Babel if you would like

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = Your MongoDB URI
<!-- JWT_SECRET = 'abc123' -->
<!-- PAYPAL_CLIENT_ID = Your Paypal Client Id -->
```

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

There is a Heroku postbuild script, so if you push to Heroku, no need to build manually for deployment to Heroku

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```


```
Sample User Logins

Fill Register Page and create own account   (Customer)

marten@gmail.com (Admin)
12345

hunter@gmail.com (Customer)
123456



```
