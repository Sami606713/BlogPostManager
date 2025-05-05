import { Router } from "express";
import {CreateBlog,UpdateBlog,GetBLogs,GetById,DeleteBlog} from "../Controller/blogController.js"

const router = Router();

// get blog posts 
router.get("/",GetBLogs)

// get by id
router.get("/:id",GetById)

// create blog post
router.post("/create",CreateBlog)

// Update blog post
router.put("/update/:id",UpdateBlog)

// delete blog post
router.delete("/delete/:id",DeleteBlog)
export default router;