import mongoose    from "mongoose";


const formSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim: true,
        maxlength: [50, 'Name cannot exceed 50 characters']
    },
    email:{
        type:String,
        required:true,
        trim: true,
        lowercase: true,
        
    },
    number:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum: ['male', 'female'],
        required:true
    },
    message:{
        type:String,
        required:true,
        maxlength: [400, 'message cannot exceed 400 characters']
    }

})
const formModel= mongoose.model('form',formSchema)
export default formModel