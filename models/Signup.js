
import mongoose from "mongoose"
const SignupShema=new mongoose.Shema({
    name:{
        type:String,
        required:"Name is required"
    },    
    email:{
        type:String,
        required:"Email is required"
    },
    password:{
        type:String,
        required:"Password is required"
    }
})
export default mongoose.model("Signup", SignupShema)