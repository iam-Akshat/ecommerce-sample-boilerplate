const {Schema,model} = require('mongoose')

const cartSchema = new Schema({
 
})

const Cart = model('carts',cartSchema)

module.exports = {Cart}