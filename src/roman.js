const map = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C"
}

const getAtom = function(number) {
    if (map[number]) return map[number]; //1,5,10,50
    if (map[number+1]) return "I" + map[number+1]; //4,9
    if (map[number-1]) return  map[number-1] + "I"; //2,6,11
    if (map[number-2]) return  map[number-2] + "II"; //7,3,12
    if (map[number-3]) return  map[number-3] + "III"; //8,13
}

module.exports.convert = function(number) {
    const wholeTens = Math.floor(number/10);
    const atom = getAtom(number);
    if (atom && wholeTens !== 4 && wholeTens !== 9) return atom;
    if (wholeTens > 0) {
        const tenRemainder = number % 10;
        const fortyX = wholeTens === 4;
        const ninetyX = wholeTens === 9;
        const atom = tenRemainder > 0 ? getAtom(tenRemainder) : "";
        if (fortyX) return "XL" + atom;
        if (ninetyX) return "XC" + atom;
        if (wholeTens > 4 && wholeTens < 9) return "L" + "X".repeat(wholeTens - 5) + atom;
        if (wholeTens > 9) return "C" + "X".repeat(wholeTens - 10) + atom;
        return "X".repeat(wholeTens) + atom;
    }
}