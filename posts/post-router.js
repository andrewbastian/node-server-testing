const express = require("express")
const Posts = require("./post-model")

const router = express.Router()

router.get("/", async (req, res, next) => {
	try {
		res.json(await Posts.getAll())
	} catch(err) {
		next(err)
	}
})

router.post('/post', async (req, res, next) =>{
	try{
		const post = await Posts.addPost(req.body)
		res.status(201).json(post)
	} catch(err) {
		next(err)
	}

})

module.exports = router