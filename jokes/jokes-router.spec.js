const request = require('supertest')
const server = require('../api/server')

describe("jokes-router.js", () => {
  describe("GET /jokes", () => {
    test("should return a 200 status okay", async () => {
      await request(server)
      .get("/jokes")
      .then(res => {
        expect(res.status).toBe(200)
      })
    })
  })
})