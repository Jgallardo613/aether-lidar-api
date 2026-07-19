const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.config');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use('/scans', require('./routes/scanRoutes'));
app.use('/operators', require('./routes/operatorRoutes'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));