const usersModel = require("./users-model")
const db = require('../database/config')

test("add", async () => {
	const res = await usersModel.add({ username: "dude", password: "crud" })
	expect(res.username).toBe("dude")
})

test("findById", async () => {
	const res = await usersModel.findById(1)
	expect(res.username).toBe("crazyName")
})
