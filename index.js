const express = require('express');
const bodyParser = require('body-parser');
const config = require('getconfig');
const morgan = require('morgan');

const Router = require('./route');

const app = express();

app.use(bodyParser.json());
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));
app.use('/', Router);

app.listen(config.port, () => {
  console.log(`server open ${config.port}`);
});
