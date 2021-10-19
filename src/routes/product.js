const { Router } = require('express')
const { Product } = require('../models/Product')
const { productValidation } = require('../utils/validation')
const { verifyIsAdmin } = require('../utils/verifyRole')
const { verifyAuthToken } = require('../utils/verifyToken')

const productRouter = new Router()

productRouter.get('/', async(req, res) => {
   
})

productRouter.post('/',verifyAuthToken,verifyIsAdmin,async (req,res)=>{

})

module.exports = { productRouter }