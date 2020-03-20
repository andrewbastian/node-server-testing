const db = require("../database/config")

module.exports = {
  addPost,
  update,
  remove,
  getAll,
  findPostById,
}

async function addPost(post) {
  const [id] = await db('posts').insert(post)
  return findById(id)
}

async function update(id, changes) {
  return null
}

function remove(id) {
  return db("posts").where("id", id).del()
}

function getAll() {
  return db("posts")
}

function findPostById(id) {
  return db("posts")
  .where("id", id)
  .first()
}