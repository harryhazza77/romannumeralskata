const map = {
    1: "I",
    5: "V",
    10: "X"
}

module.exports.convert = function(number) {
    const wholeFives = number/5;
    const moduloFive = number % 5;
    console.log({number, wholeFives, moduloFive});
    if (moduloFive === number) {
        if (moduloFive === 4) {
            return "IV";
        }
        return "I".repeat(number);
    }
    if (moduloFive === 0) {
        return "V";
    }
    return "V" + "I".repeat(moduloFive);
}