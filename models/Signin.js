
import mongoose from "mongoose"
const SigninShema=new mongoose.Shema({
    email:{
        type:String,
        require:"Email is required"
    },
    password:{
        type:String,
        require:"Password is required"
    }
})
export default mongoose.model("Signin", SigninShema)