const chai = require("chai");
const subject = require("../src/roman.js");
const leche = require("leche");

describe("number to roman number conversion tests", () => {
    describe("invalid input", () => {
        it("should handle non-integers", () => {
            chai.expect(subject.convert(1.01)).to.equal("integer greater than zero required")
        });
        it("should handle negatives", () => {
            chai.expect(subject.convert(-1)).to.equal("integer greater than zero required")
        });
        it("should handle zero", () => {
            chai.expect(subject.convert(0)).to.equal("integer greater than zero required")
        });
        it("should handle null", () => {
            chai.expect(subject.convert(null)).to.equal("integer greater than zero required")
        });
    })
    describe("valid integers", () => {
        leche.withData({
            "1":[1,"I"],
            "2":[2,"II"],
            "3":[3,"III"],
            "4":[4,"IV"],
            "5":[5,"V"],
            "6":[6,"VI"],
            "7":[7,"VII"],
            "8":[8,"VIII"],
            "9":[9,"IX"],
            "10":[10,"X"],
            "11":[11,"XI"],
            "14":[14,"XIV"],
            "15":[15,"XV"],
            "16":[16,"XVI"],
            "19":[19,"XIX"],
            "20":[20,"XX"],
            "21":[21,"XXI"],
            "24":[24,"XXIV"],
            "25":[25,"XXV"],
            "26":[26,"XXVI"],
            "29":[29,"XXIX"],
            "30":[30,"XXX"],
            "31":[31,"XXXI"],
            "34":[34,"XXXIV"],
            "35":[35,"XXXV"],
            "36":[36,"XXXVI"],
            "39":[39,"XXXIX"],
            "40":[40,"XL"],
            "41":[41,"XLI"],
            "44":[44,"XLIV"],
            "45":[45,"XLV"],
            "46":[46,"XLVI"],
            "49":[49,"XLIX"],
            "50":[50,"L"],
            "51":[51,"LI"],
            "54":[54,"LIV"],
            "55":[55,"LV"],
            "56":[56,"LVI"],
            "59":[59,"LIX"],
            "60":[60,"LX"],
            "61":[61,"LXI"],
            "64":[64,"LXIV"],
            "65":[65,"LXV"],
            "66":[66,"LXVI"],
            "69":[69,"LXIX"],
            "70":[70,"LXX"],
            "71":[71,"LXXI"],
            "74":[74,"LXXIV"],
            "75":[75,"LXXV"],
            "76":[76,"LXXVI"],
            "79":[79,"LXXIX"],
            "80":[80,"LXXX"],
            "81":[81,"LXXXI"],
            "84":[84,"LXXXIV"],
            "85":[85,"LXXXV"],
            "86":[86,"LXXXVI"],
            "89":[89,"LXXXIX"],
            "90":[90,"XC"],
            "91":[91,"XCI"],
            "94":[94,"XCIV"],
            "95":[95,"XCV"],
            "96":[96,"XCVI"],
            "99":[99,"XCIX"],
            "100":[100,"C"],
            "101":[101,"CI"],
            "104":[104,"CIV"],
            "105":[105,"CV"],
            "106":[106,"CVI"],
            "109":[109,"CIX"],
            "110":[110,"CX"],
            "111":[111,"CXI"],
            "114":[114,"CXIV"],
            "115":[115,"CXV"],
            "116":[116,"CXVI"],
            "119":[119,"CXIX"],
            "120":[120,"CXX"],
            "121":[121,"CXXI"],
            "139":[139,"CXXXIX"],
        },
            (number, roman) => {
                it("should pass", () => {
                    chai.expect(subject.convert(number)).to.equal(roman);
                });
        })
    })
});