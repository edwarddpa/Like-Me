import { Router } from "express"

import { createPost, deletePost, getAllPosts, updateLikes } from "../src/controllers/post.controller.js"

const router = Router()

router.get("/posts", getAllPosts)
router.post("/post", createPost)
router.put("/posts/like/:id", updateLikes)
router.delete("/posts/:id", deletePost)


export default router