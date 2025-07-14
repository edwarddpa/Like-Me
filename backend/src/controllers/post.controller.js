import getPostModel, { createPostModel } from "../models/postModel.js"

// post
export const createPost = async (req, res) => {
    try {
        const { titulo, img, descripcion, likes } = req.body
        const newPost = await createPostModel(titulo, img, descripcion, likes)
        res.json(newPost)

    } catch (error) {
        console.error("Error =>", error)
        res.status(500).json({ message: "Error creating post" })
    }
}

// get
export const getAllPosts = async (req, res) => {
    try {
        const posts = await getPostModel()
        res.json(posts)
    } catch (error) {
        console.error("Error =>", error)
        res.status(500).json({ message: "Error fetching posts" })
    }
}