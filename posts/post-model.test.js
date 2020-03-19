const usersModel = require("./users-model")
const db = require('../database/config')

test("addPost", async () => {
	const res = await usersModel.addPost({ post_subject: "crazyPost", post_text: "crud, i just dont know what to say" })
	expect(res.post_subject).toBe("crazyPost")
	expect(res.post_text).toBe("crud, i just dont know what to say")
})

test("findPostById", async () => {
	const res = await usersModel.findById(1)
	expect(res.post_subject).toBe("sam")
})
