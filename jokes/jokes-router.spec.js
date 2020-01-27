const request = require('supertest')
const server = require('../api/server')

describe("jokes-router.js", () => {
  describe("GET /jokes", () => {
    test("should return a 404 status okay", async () => {
      await request(server)
      .get("/jokes")
      .then(res => {
        expect(res.status).toBe(404)
      })
    })
  })

  test("Jokes header type", async () => {
    const res = await request(server).get('/api/jokes')

    expect(res.type).toBe('application/json')
  })

})