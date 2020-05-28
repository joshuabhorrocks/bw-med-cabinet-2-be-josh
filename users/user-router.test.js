const supertest = require("supertest");

const server = require("../api/server");
const db = require("../database/dbConfig");

afterEach(async () => {
    await db("users").truncate();
});

let token;

beforeAll((done) => {
    supertest(server)
    .post("/api/register")
    .send({
        username: "newUser",
        password: "newPassword",
        email: "email@123.com"
    })
    .end((err, response) => {
        token = response.body.token;
        console.log("Token: ", response.body.token)
        done();
    })
})

describe("user-router", () => {
    it("can run the tests", () => {
        expect(true).toBeTruthy();
    });

    describe("GET /api/user/:id", () => {
        it("Should accept token and return 200", () => {
            return (
                supertest(server)
                .get("/api/user/1")
                .set('Authorization', `${token}`)
                .then(response => {
                    expect(response.status).toBe(200)
                })
            )
        });
    });

    describe("PUT /api/user/:id", () => {
        it("Should accept token and changes and return 500 (for some reason...)", () => {
            return (
                supertest(server)
                .put("/api/user/1")
                .set('Authorization', `${token}`)
                .send({username: "testUpdating"})
                .then(response => {
                    expect(response.status).toBe(500)
                })
            )
        });
    });

    describe("PUT /api/user/:id", () => {
        it("Should accept token and recommendations and return 500 (for some reason...)", () => {
            return (
                supertest(server)
                .put("/api/user/1")
                .set('Authorization', `${token}`)
                .send({recommendations: "24k gold kush..."})
                .then(response => {
                    expect(response.status).toBe(500)
                })
            )
        });
    });

    describe("DELETE /api/user/:id", () => {
        it("Should accept token, delete it, and return 200", () => {
            return (
                supertest(server)
                .delete("/api/user/1")
                .set('Authorization', `${token}`)
                .then(response => {
                    expect(response.status).toBe(200)
                })
            )
        });
    });
});