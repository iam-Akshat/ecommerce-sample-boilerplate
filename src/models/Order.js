const { Schema, model } = require('mongoose')

const orderSchema = new Schema({

})

const Order = model('orders', orderSchema)

module.exports = { Order }