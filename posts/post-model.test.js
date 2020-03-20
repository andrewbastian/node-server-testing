const postModel = require("./post-model")
const db = require('../database/config')

test("addPost", async () => {
	const res = await postModel.addPost({ post_subject: "crazyPost1", post_text: "1crud, i just dont know what to say" })
	expect(res.post_subject).toBe("crazyPost1")
	expect(res.post_text).toBe("1crud, i just dont know what to say")
})

test("findPostById", async () => {
	const res = await postModel.findPostById(1)
	expect(res.post_subject).toBe("crazyPost1")
})
