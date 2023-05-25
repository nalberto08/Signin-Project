
import bodyParser from "body-parser";
import express from "express";
import { Signin, Signup} from "../controllers/user.js"

const router=express.Router();
router.use(bodyParser.json())

router.post("/Signin", Signin);
router.get("/Signup", Signup);

export default router