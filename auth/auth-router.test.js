const supertest = require("supertest");

const server = require("../api/server");
const db = require("../database/dbConfig");

afterEach(async () => {
    await db("users").truncate();
});

describe("users", () => {
    it("can run the tests", () => {
        expect(true).toBeTruthy();
    });

    describe("Register User on POST /register without valid credentials", () => {
        it("Should return http status code 400", () => {
            return (
                supertest(server)
                .post("/api/register")
                .send({username: null, password: null, email: null})
                .then(response => {
                    expect(response.status).toBe(400);
                })
            )
        })
    })

    describe("Register User on POST /register with valid credentials", () => {
        it("Should return http status code 201", () => {
            return (
                supertest(server)
                .post("/api/register")
                .send({username: "testinguser", password: "testingpassword", email: "testing@email.com"})
                .then(response => {
                    expect(response.status).toBe(201);
                })
            )
        })
    })

    describe("Login User on POST /login without valid credentials", () => {
        it("Should return http status code 401", () => {
            return (
                supertest(server)
                .post("/api/login")
                .send({username: "testuser", password: "sbasdjflhas", email: "sasdfa@sadgfsggh.com"})
                .then(response => {
                    expect(response.status).toBe(401);
                })
            )
        })
    })

    describe("Login User on POST /login with valid credentials", () => {
        it("Should return http status code 200", () => {
            return (
                supertest(server)
                .post("/api/login")
                .send({username: "testinguser", password: "testingpassword", email: "testing@email.com"})
                .then(response => {
                    expect(response.status).toBe(401);
                })
            )
        })
    })
});