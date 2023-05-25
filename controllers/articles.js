
import articlemodel from "../models/articlemodel.js"

const createArticle=(req,res)=>{
    try{
      const data=req.body;
        
      let articleInstance=  new articlemodel({
         title:req.body.title,
         content:req.body.content,
         author:req.body.author, 
         image:req.body.image

     })
     articleInstance.save()
     .then((data)=>{
        res.send(data)
     })     
    }
    catch(err){
        console.log("The errors found")
        res.send({message:"Failed to save the data"})
    }
}

const readArticle=async(req,res)=>{
try{
    const blogId=req.params.reqId
    const query={_id:blogId}

    const result=await articlemodel.find(query)
    if(result.length==0){
        res.status(404).json({
           message:"data fetched but nothing found" ,
           error:null,
           data:result
        })
    }
}
catch(err){
    console.log("error found ")
    res.send({message:"failed to get the data "})
}
}

const updateArticle=async(req,res)=>{
const articleId=req.params.articleId;
const updates=req.body;
let found=await articlemodel.find({_id:articleId})
if(found.length==0){
    res.status(404).json({
        message:"article trying to update is not available",
        error:"Article",
        data:null
    });
}
else{
    let result=await articlemodel.findOneAndUpdate(
        {_id:articleId},
        {_id:updates}
    )
    res.status(404).json({
        message:"article trying to update is not available",
        error:"Article",
        data:result
    })
}
}

const deleteArticle=async(req,res)=>{

const articleId=req.params.articleId;
let found= await articlemodel.find({_id:articleId});
if(found.length==0){
    res.status(404).json({
        message:"article trying to delete is not available",
        data:null
    })
}else{
    let result=await articlemodel.deleteOne({_id:articleId})
    res.status(200).json({
        message:"delete succesfully",
        error:null,
        data:result
    })
}
}

const readArticlesLimited=async(req,res)=>{
try{
    const page=req.query.page;
    const range=req.query.limit;

    let limitation=range*page;
    let start=limitation-range;
let result=await articlemodel.find({}).skip(start).limit(range)
res.status(200).json({
    message:"data fetched succesfull",
    error:null,
    data:result
})
}
catch(err){
    console.log("error under readArticlesLimit")
    res.status(500).json({
        message:"failed to read articles specified",
        error:"internal error server",
        data:null
    })
}
}
export {createArticle, readArticle, updateArticle, deleteArticle, readArticlesLimited}