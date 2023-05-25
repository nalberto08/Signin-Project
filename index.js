import express  from "express";
import cors from "cors"
import welcome from "./controllers/welcome.js"
import articles from "./routes/articles.js"
import name from "./routes/articles.js"
import user from "./routes/users.js"
import mongoose from "mongoose";


const app=express();
app.use(cors());

const connectToMongoDb= ()=>{
    mongoose.connect("mongodb+srv://nalberto:einsten02@cluster0.ugb7luj.mongodb.net/?retryWrites=true&w=majority")
    .then(()=>{
        console.log("Database connected successfully");
    }).catch((err)=>{
        console.log("Failed to connect the databese", err);
    })
}

app.delete("/api/v1/", articles);
app.use("/api/v1", name);
app.use("api/v1/articles", articles)
app.use("api/v1/users", user)

    

const port=4060;
app.listen(port, ()=>{
    console.log("The server is running");
    connectToMongoDb();
});