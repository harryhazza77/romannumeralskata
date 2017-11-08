const chai = require("chai");
const subject = require("../src/roman.js");

describe("tests", () => {
    it("1", () => {
        chai.expect(subject.convert(1)).to.equal("I");
    });
    it("2", () => {
        chai.expect(subject.convert(2)).to.equal("II");
    });
    it("3", () => {
        chai.expect(subject.convert(3)).to.equal("III");
    });
    it("4", () => {
        chai.expect(subject.convert(4)).to.equal("IV");
    });
    it("5", () => {
        chai.expect(subject.convert(5)).to.equal("V");
    });
    it("6", () => {
        chai.expect(subject.convert(6)).to.equal("VI");
    });
    it("7", () => {
        chai.expect(subject.convert(7)).to.equal("VII");
    });
    it("8", () => {
        chai.expect(subject.convert(8)).to.equal("VIII");
    }); 
    it("9", () => {
        chai.expect(subject.convert(9)).to.equal("IX");
    }); 
    it("10", () => {
        chai.expect(subject.convert(10)).to.equal("X");
    });
    it("11", () => {
        chai.expect(subject.convert(11)).to.equal("XI");
    });
    it("12", () => {
        chai.expect(subject.convert(12)).to.equal("XII");
    });
    it("13", () => {
        chai.expect(subject.convert(13)).to.equal("XIII");
    });
    it("14", () => {
        chai.expect(subject.convert(13)).to.equal("XIV");
    });
});