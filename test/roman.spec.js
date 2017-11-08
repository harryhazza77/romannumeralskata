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
    it("14", () => {
        chai.expect(subject.convert(14)).to.equal("XIV");
    });
    it("15", () => {
        chai.expect(subject.convert(15)).to.equal("XV");
    });
    it("16", () => {
        chai.expect(subject.convert(16)).to.equal("XVI");
    });
    it("19", () => {
        chai.expect(subject.convert(19)).to.equal("XIX");
    }); 
    it("20", () => {
        chai.expect(subject.convert(20)).to.equal("XX");
    }); 
    it("21", () => {
        chai.expect(subject.convert(21)).to.equal("XXI");
    });     
    it("24", () => {
        chai.expect(subject.convert(24)).to.equal("XXIV");
    }); 
    it("25", () => {
        chai.expect(subject.convert(25)).to.equal("XXV");
    }); 
    it("26", () => {
        chai.expect(subject.convert(26)).to.equal("XXVI");
    }); 
    it("29", () => {
        chai.expect(subject.convert(29)).to.equal("XXIX");
    }); 
    it("30", () => {
        chai.expect(subject.convert(30)).to.equal("XXX");
    }); 
    it("34", () => {
        chai.expect(subject.convert(34)).to.equal("XXXIV");
    }); 
    it("35", () => {
        chai.expect(subject.convert(35)).to.equal("XXXV");
    }); 
    it("36", () => {
        chai.expect(subject.convert(36)).to.equal("XXXVI");
    }); 
    it("39", () => {
        chai.expect(subject.convert(39)).to.equal("XXXIX");
    }); 
});