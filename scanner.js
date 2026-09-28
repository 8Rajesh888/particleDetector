const r = require("raylib");
const w = require("./window");

const s1Width = 100;
const s1Start = 0;
const s1End = w.width / 2;
let s1XCord = 0;
let s1Velocity = 5;
let s1Colour;


const s2Width = 40;
const s2Start = w.width / 2;
const s2End = w.width;
let s2XCord = (w.width / 2) + 10;
let s2Velocity = 3;
let s2Colour;


const s3Height = 40;
const s3Start = 0;
const s3End = w.height;
let s3YCord = w.height - s3Height;
let s3Velocity = 6;
let s3Colour;


function hasDetected(scannerCord, particleStart, particleEnd, widthOrHeight) {
    return scannerCord + widthOrHeight >= particleStart
        && scannerCord <= particleEnd;
}

// fixme - better name this.
function deriveScannerColour(scannerCord, particleStart, particleEnd, widthOrHeight) {
    return (hasDetected(scannerCord, particleStart, particleEnd, widthOrHeight)) ? r.RED : r.WHITE;
}

// fixme - better name this. 
function deriveVelocity(velocity, start, width, range1, range2) {
    return ifOutOfBounds(start, width, range1, range2)
        ? -velocity : velocity;
}

function ifOutOfBounds(start, width, minrange, maxrange) {
    return start < minrange || (start + width) > maxrange;
}

function moveScanner(scannerCord, Velocity) {
    return scannerCord + Velocity;
}

module.exports = {
    moveScanner,
    deriveScannerColour,
    deriveVelocity,

    s1Width,
    s1Start,
    s1End,
    s1XCord,
    s1Velocity,
    s1Colour,

    s2Width,
    s2Start,
    s2End,
    s2XCord,
    s2Velocity,
    s2Colour,

    s3Height,
    s3Start,
    s3End,
    s3YCord,
    s3Velocity,
    s3Colour
}