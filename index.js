const express = require('express');
const bodyParser = require('body-parser');
const config = require('getconfig');
const morgan = require('morgan');

const { NotImplementedException } = require('./error');

const app = express();

app.use(bodyParser.json());
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

app.get('*', (request, response) => {
  try {
    throw new NotImplementedException();
  } catch (error) {
    response.status(error.status).json({
      success: false,
      data: error,
    });
  }
});

app.listen(config.port, () => {
  console.log(`server open ${config.port}`);
});
