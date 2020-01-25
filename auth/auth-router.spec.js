const request = require('supertest')
const server = require('../api/server')
const db = require('../database/dbConfig')
const Users = require('../users/user-model')

describe("auth-router.js", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });

  describe("POST /login", () => {
    test("should return a 404 status", () => {
      return request(server)
      .post("/login")
      .then(res => {
        expect(res.status).toBe(404)
      })
    })
  })

  describe("POST /register", () => {
    test("should return a 404 status", async () => {
      await request(server)
        .post("/register")
        .then(res => {
          expect(res.status).toBe(404)
      })
    })
  })

  describe("POST /register", () => {
    test("user should be created with 201", async () => {
      await request(server)
        .post("/api/auth/register")
        .send({ username: "user11", password: "password" })
        .then(res => {
          expect(res.status).toBe(201);
        })
    })
  })
})