# Bio-WebApp
![](https://img.shields.io/badge/node-^6.7.0-blue.svg) ![](https://img.shields.io/badge/express-^4.16.3-green.svg) ![](https://img.shields.io/badge/mongoose-^5.1.5-green.svg) <br>

Here is a backend API of MEAN stack (MongoDB, Express, Angular, NodeJS) built by Express framework. This API contains the login/logout and register functionalities with JWT tokens in order to authenticate the user information.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* Your own MongoDB should be installed no matter 
a local one such as [MongoDB Compass](https://www.mongodb.com/products/compass)
 or a remote one like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

* Nodejs should be installed

```Bash
brew install node
```

### Installing

* Install the dependencies for the backend at root directory:

```Bash
npm install
```

## Running the project

* First, run the MongoDB server:
```Bash
mongod
```

* Then open a new terminal and change to the root directory to run the backend server:

```Bash
nodemon
```

Then, we can see our project locally on http://localhost:3000.

## Built With

* [MongoDB/Mongoose](https://www.npmjs.com/package/mongoose) - The database for the project and the related small API.
* [Express](https://expressjs.com/) - Web backend framework.
* [Nodejs](https://nodejs.org/en/) - Javascript running environment.

