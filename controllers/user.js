
import Signup from "../models/Signup.js";
import Signin from "../models/Signin.js";

const Signup= async(req, res)=>{
 try{
    const data=req.body
    const control= await Signup.findOne({email:data.email})
    if(control){
        res.status(404).json({
            message:"Some one in our system"
        })
    }
    let SignupInstance= new Signup({
        name:data.body.name,
        email:data.email,
        password:data.password
    })
    
    SignupInstance.save()
    .then((data)=>{
        res.send(data)
    })
 }
 
 catch(err){
    console.log("Found errors")
    res.send("The errors was found")
 }
    
}

const Signin=async(req,res)=>{

    try{
        const data=req.body
        const control= await Signin.findOne({email:data.email})
        if(control.length==0){
            res.status(404).json({
                message:"Someone need to signin",
                data:control
            })
        }else{

            res.status(200).json({
                message:"Login successfull",
                data:control
            })
        }
    }     
    catch(err){
       console.log("The errors wos found")
       res.send("The erros send")
    } 
        let SignupInstance= new Signup({
            name:data.body.name,
            email:data.email,
            password:data.password
        })
        
        SignupInstance
        .then((data)=>{
            res.send(data)    
        })  
     
}
export {Signup, Signin};