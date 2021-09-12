require('./config/config');
require('./models/db');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 3000;

const rtsIndex = require('./routes/index.router');

var app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/api', rtsIndex);



//Starting server
app.listen(PORT, () => console.log(`server is running at port :  ${PORT}`));