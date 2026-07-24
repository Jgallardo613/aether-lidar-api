const express = require('express');
const cors = require('cors');
const session = require('express-session');
const connectDB = require('./config/db.config');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
require('dotenv').config();

const passport = require('./passport-config');

const app = express();
app.use(cors());
app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

connectDB();

app.use('/auth', require('./routes/authRoutes'));
app.use('/scans', require('./routes/scanRoutes'));
app.use('/operators', require('./routes/operatorRoutes'));

app.get('/', (req, res) => {
  if (req.user) {
    res.send(`Logged in as ${req.user.username}. <a href="/auth/logout">Logout</a>`);
  } else {
    res.send('<a href="/auth/github">Login with GitHub</a>');
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));