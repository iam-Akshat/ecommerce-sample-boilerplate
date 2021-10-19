const { Category } = require("../models/Category")
const { categoryValidation } = require("../utils/validation")
const { verifyIsAdmin } = require("../utils/verifyRole")
const { verifyAuthToken } = require("../utils/verifyToken")

const {Router} = module.require('express')

const categoryRouter = Router()

categoryRouter.get('/',async (req,res)=>{

})

categoryRouter.post('/',verifyAuthToken,verifyIsAdmin,async(req,res)=>{

})

module.exports = {categoryRouter}