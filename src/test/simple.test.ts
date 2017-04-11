import * as chai from "chai";
import * as mocha from "mocha";
import chaiHttp = require("chai-http");

import app from ".././app";

chai.use(chaiHttp);
const expect = chai.expect;

describe("base route", () => {

    it("should be json", () => {
        return chai.request(app).get("/")
            .then((res) => {
                expect(res.type).to.eql("application/json");
            });
    });

    it("should have a message field", () => {
        return chai.request(app).get("/")
            .then((res) => {
                expect(res.body.message).to.eql("Hello World!");
            });
    });
});
