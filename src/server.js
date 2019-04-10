import express from 'express'
import mongoose from 'mongoose'
import dotenv from "dotenv";
import bodyParser from 'body-parser'

import responseWrapper from './utils/responseWrapper'
import productRouter from './routers/product'

dotenv.config() // init environment settings
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.json(responseWrapper("Up and running"))
})

// define routers
app.use('/product', productRouter)

// connect to mongo database
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1); // exit with error
  }

  console.log('Successfully connected to Mongo database')
})

// run the app
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started at ${process.env.PORT || 3000}`)
})
