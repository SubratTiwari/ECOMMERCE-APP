import mongoose from 'mongoose'

const categoryScgema = new mongoose.Schema({
    name:{
        type :String, 
        required: true,
        unique: true,
    },
    slug:{
        type :String,
        lowercase :true,
    },
}); 

export default mangoose.model("Category", categorySchema);