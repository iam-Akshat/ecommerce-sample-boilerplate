const {Schema,model} = require('mongoose')

const productSchema = new Schema({

})

const Product = model('products',productSchema)

module.exports = {Product}