const {Schema,model} = require('mongoose')

const categorySchema = new Schema({
    
})

const Category = model('categories',categorySchema)

module.exports = {Category}