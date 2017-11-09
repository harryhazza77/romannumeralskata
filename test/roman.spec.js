const chai = require("chai");
const subject = require("../src/roman.js");
const leche = require("leche");

describe("number to roman number conversion tests", () => {
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
        "12":[12,"XII"],
        "13":[13,"XIII"],
        "14":[14,"XIV"],
        "15":[15,"XV"],
        "16":[16,"XVI"],
        "17":[17,"XVII"],
        "18":[18,"XVIII"],
        "19":[19,"XIX"],
        "20":[20,"XX"],
        "21":[21,"XXI"],
        "22":[22,"XXII"],
        "23":[23,"XXIII"],
        "24":[24,"XXIV"],
        "25":[25,"XXV"],
        "26":[26,"XXVI"],
        "27":[27,"XXVII"],
        "28":[28,"XXVIII"],
        "29":[29,"XXIX"],
        "30":[30,"XXX"],
        "31":[31,"XXXI"],
        "32":[32,"XXXII"],
        "33":[33,"XXXIII"],
        "34":[34,"XXXIV"],
        "35":[35,"XXXV"],
        "36":[36,"XXXVI"],
        "37":[37,"XXXVII"],
        "38":[38,"XXXVIII"],
        "39":[39,"XXXIX"],
    },
        (number, roman) => {
            it("should pass", () => {
                chai.expect(subject.convert(number)).to.equal(roman);
            });
    })
});