import getPostModel, { createPostModel, updateLikesModel, deletePostModel } from "../models/postModel.js"

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

// update
export const updateLikes = async (req, res) => {
    try {
        const { id } = req.params
        const updatedPost = await updateLikesModel(id)
        if (updatedPost) {
            res.json(updatedPost)
        } else {
            res.status(404).json({ message: "Post not found" })
        }
    } catch (error) {
        console.error("Error =>", error)
        res.status(500).json({ message: "Error updating likes" })
        
    }
}

// delete
export const deletePost = async (req, res) => {
    try {
        const { id } = req.params
        const deletedPost = await deletePostModel(id)
        if (deletedPost) {
            res.json({ message: "Post deleted successfully" })
        } else {
            res.status(404).json({ message: "Post not found" })
        }
    } catch (error) {
        console.error("Error =>", error)
        res.status(500).json({ message: "Error deleting post" })
        
    }
}