const { Router } = require('express')
const { Cart } = require('../models/Cart')
const { Order } = require('../models/Order')
const { Product } = require('../models/Product')
const { verifyAuthToken } = require('../utils/verifyToken')

const orderRouter = new Router()

orderRouter.post('/',verifyAuthToken,async(req,res)=>{
    
})

module.exports = {orderRouter}