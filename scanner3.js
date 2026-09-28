const w = require("./window");
const height = 40;
const start = 0;
const end = w.height;
let yCord = w.height - height;
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
