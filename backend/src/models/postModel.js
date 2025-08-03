import pool from "../../db/config.js"

// post
export const createPostModel = async(titulo, img, descripcion, likes) => {
    const sqlQuery = "INSERT INTO posts(titulo, img, descripcion, likes) values($1, $2, $3, $4) RETURNING *"
    const values = [titulo, img, descripcion, likes]
    const results = await pool.query(sqlQuery, values)
    return results.rows
}

// get
const getPostModel = async() => {
    const sqlQuery = "SELECT * FROM posts"
    const results = await pool.query(sqlQuery)
    console.log(results.rows)
    return results.rows
}

// put
const updateLikesModel = async(id) => {
    const sqlQuery = "UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *"
    const values = [id]
    const results = await pool.query(sqlQuery, values)
    console.log(results.rows[0])
    return results.rows[0]
}

// delete
const deletePostModel = async(id) => {
    const sqlQuery = "DELETE FROM posts WHERE id = $1 RETURNING *"
    const values = [id]
    const results = await pool.query(sqlQuery, values)
    console.log(results.rows[0])
    return results.rows[0]
}

export default getPostModel
export { updateLikesModel, deletePostModel }