const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const items = require('./routes/api/items');
var auth = require('./routes/api/auth');

const app = express();

// app.use(express.static(__dirname + '/website'));

// // Passport Config
// require('./config/passport')(passport);

// DB Config
var db = require('./config/db').mongoURI;

// Connect Mongo
mongoose
  .connect(db)
  .then(() => console.log('Mongoose connected....'))
  .catch(err => console.log(err));

//Middleware
app.use(bodyParser.json());
app.use(methodOverride('_method'));


// Express body parser
app.use(express.urlencoded({ extended: true }));

// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

// Passport middleware
// app.use(passport.initialize());
// app.use(passport.session());

// // Connect flash
// app.use(flash());

// Routes
app.use('/api/items', items);
app.use('/api/auth', auth);
// app.use('/', require('./routes/index.js'));
// app.use('/users', require('./routes/users.js'));
// app.use('/portal', require('./routes/portal.js'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
