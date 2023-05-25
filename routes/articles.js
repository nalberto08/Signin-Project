
import bodyParser from "body-parser";
import express from "express";
import { createArticle, readArticle, updateArticle, } from "../controllers/articles.js"
import { provideName, deleteName, updateName } from "../controllers/names.js";


const router=express.Router();
router.use(bodyParser.json())

router.post("/names/:reqName", provideName);
router.delete("/names/delete", deleteName);
router.patch("/names/:number", updateName);


router.post("/article/create", createArticle);
router.get("/article/read", readArticle);
router.put("/article/update", updateArticle);

export default router
