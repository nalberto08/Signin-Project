import mongoose from "mongoose";

const articleSchema= new mongoose.Schema({
    title:{
        type:String,
        required:"Title is required"
    },
    content:{
        type:String,
        required:"The content is required"
    },
    author:{
        type:String,        
    },
    image:{
        type:String,
    },
    pages:{
        type:String,
    },
    coments:{}
    
});
export default mongoose.model("articles", articleSchema);