const scr = require("./screen");
const height = 40;
const start = 0;
const end = scr.height;
let yCord = scr.height - height;
let velocity = 6;
let colour;

module.exports = {
    height,
    start,
    end,
    yCord,
    velocity,
    colour
}
