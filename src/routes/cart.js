const {Router} = require('express');
const {verifyAuthToken} = require('../utils/verifyToken')
const {User} = require('../models/User')
const {Cart} = require('../models/Cart')
const cartRouter = new Router()

cartRouter.get('/',verifyAuthToken,async (req,res)=>{
   
    
})
cartRouter.post('/',verifyAuthToken,async (req,res)=>{
    
    
})

module.exports = {cartRouter}