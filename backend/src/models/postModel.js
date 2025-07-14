import pool from "../../db/config.js"

// post
export const createPostModel = async(titulo, img, descripcion, likes) => {
    const sqlQuery = "INSERT INTO posts(titulo, img, descripcion, likes) values($1, $2, $3, $4) RETURNING *"
    const values = [titulo, img, descripcion, likes]
    const results = await pool.query(sqlQuery, values)
    return result.rows
}

// get
const getPostModel = async() => {
    const sqlQuery = "SELECT * FROM posts"
    const results = await pool.query(sqlQuery)
    console.log(results.rows)
    return results.rows
}

export default getPostModel