const map = {
    1: "I",
    5: "V",
    10: "X"
}

const getComponent = function(number) {
    if (number === 0) return "";
    if (map[number]) return map[number]; //1,5,10
    if (map[number+1]) return "I" + map[number+1]; //4,9
    if (map[number-1]) return  map[number-1] + "I"; //2,6,11
    if (map[number-2]) return  map[number-2] + "II"; //7,3,12
    if (map[number-3]) return  map[number-3] + "III"; //8,13
}

module.exports.convert = function(number) {
    const component = getComponent(number);
    if (component) return component;
    const wholeTens = Math.floor(number/10);
    if (wholeTens > 0) {
        return "X".repeat(wholeTens) + getComponent(number % 10);
    }
}