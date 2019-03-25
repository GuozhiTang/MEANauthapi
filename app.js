// Main server entry point file
// Bring all the modules
const express = require('express');
// path is a core module so do not need to install in dependencies
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport  = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

// To call the connect function of mongoose
mongoose.connect(config.database,{useNewUrlParser: true});

// To put in something so that it will let us know if we are connected
mongoose.connection.on('connected', () => {
  console.log('Connected to database ' + config.database);
});

mongoose.connection.on('error', (err) => {
  console.log('Database error: ' + err);
});

// Initialize app variable with express
const app = express();

// Include the file of user routes
const users = require('./routes/users');

// Port Number
const port = 3000;

// CORS Middleware: allows us to make request to our api from a different domain
app.use(cors());

// Set Static Folder: client files, entire angular2 app
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware: parses incoming request body
//   to access req.body and get the form value
//   where key is the name attribute of input or textarea
app.use(bodyParser.json());

// Passport Middleware
// Strategy: passport-jwt
//   *MUST* be after Express Session Middleware
//   if express-session is being used
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

// Anything like 'localhose:3000/users/xxx' will go to users file
app.use('/users', users);

// Index Route to the home page
app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

// Start Server
app.listen(port, () => {
  console.log('Server started on port ' + port);
});