import { Router } from 'express'

import responseWrapper, { error } from '../utils/responseWrapper'
import productModel from '../models/product'

const product = Router()

/** 
 * Retrieve all existing products
 */
product.get('/', (_, res) => {
  productModel.find({}, (err, docs) => {
    if (err) {
      res.status(500).json(responseWrapper(error.UNDEFINED_ERROR, true))
    }
    
    res.json(responseWrapper(docs))
  })
})

/**
 * Retrieve a product by id
 * @param id product id
 */
product.get('/:id', (req, res) => {
  productModel.find({_id: req.params.id}, (err, docs) => {
    if (err) {
      res.status(500).json(responseWrapper(error.UNDEFINED_ERROR, true))
    } else if (docs.length == 0) {
      res.status(404).json(responseWrapper(error.PRODUCT_NOT_FOUND, true))
    } else {
      res.json(responseWrapper(docs[0]))
    }
  })
})

/**
 * Create a product
 */
product.post('/', (req, res) => {
  const fields = ['name', 'price']
  const productBodyParsed = {}

  fields.forEach((field) => {
    productBodyParsed[field] = req.body[field]
  });

  const newProduct = new productModel(productBodyParsed)
  newProduct.save()
    .then((storedProduct) => {
      res.json(responseWrapper(storedProduct))
    })
    .catch((error) => {
      res.status(400).json(responseWrapper(error, true))
    })
})

/**
 * Create or update a product
 */
product.put('/', (req, res) => {

})

/**
 * Remove a product by id
 * @param id product id
 */
product.delete('/:id', (req, res) => {

})

export default product