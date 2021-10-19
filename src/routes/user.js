const { User } = require("../models/User")
const { registerValidation, loginValidation } = require("../utils/validation")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const {Router} = module.require('express')

const generateAuthToken = (user_id) => {
   
}

const userRouter = Router()

userRouter.post('/signup',async (req,res)=>{
    
})
userRouter.post('/signin',async (req, res) =>{

})

module.exports = {userRouter}