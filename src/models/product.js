import { Schema, model } from "mongoose"

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, 'The parameter \"name\" is required']
  },
  price: {
    type: Number,
    default: 0.0,
    validate: {
      validator: (priceValue) => {
        return priceValue >= 0
      },
      message: 'The product\'s price can\'t be negative'
    }
  }
})

export default model('Product', productSchema)