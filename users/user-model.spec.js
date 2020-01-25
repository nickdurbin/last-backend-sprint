const Users = require('./user-model')
const db = require('../database/dbConfig')

describe("users model", () => {
  beforeEach(async () => {
    await db("users").truncate()
  })

  describe("add()", () => {
    test("should add a user to the db", async () => {
      await Users.add({ username: "user9", password: "password" })
      await Users.add({ username: "user10", password: "password" })
      const users = await db("users")
      expect(users).toHaveLength(2)
    })
  })
})