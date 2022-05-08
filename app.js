require("dotenv").config();
const express = require('express')
const logger = require('./logger')
const app = express();



app.get('/', (req, res, next) => {
    logger.debug('This is the "/" route.')
    res.status(200).send('Welcome')
  });

  app.get('/uche', (req, res, next) => {
    try {
      throw new Error('ha!')
    } catch (error) {
      logger.error('Whooops! This broke with error: ', error)
      res.status(500).send('Error!')
    }
  })
  
const { API_PORT } = process.env;

const port = process.env.PORT || API_PORT ;


app.listen(port , () =>{
console.log(`Server running on port ${port}`);
});


