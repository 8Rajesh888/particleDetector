const r = require("raylib");
const w = require("./window");

const s1Width = 100;
const s1Start = 0;
const s1End = w.width / 2;
const s1XCord = 0;
const s1Velocity = 5;
const s1Colour = r.WHITE;

const s2Width = 40;
const s2Start = w.width / 2;
const s2End = w.width;
const s2XCord = (w.width / 2) + 10;
const s2Velocity = 3;
const s2Colour = r.WHITE;

const s3Height = 40;
const s3Start = 0;
const s3End = w.height;
const s3YCord = w.height - s3Height;
const s3Velocity = 6;
const s3Colour = r.WHITE;

function hasDetected(scannerCord, particleStart, particleEnd, widthOrHeight) {
    return scannerCord + widthOrHeight >= particleStart
        && scannerCord <= particleEnd;
}

function deriveScannerColour(scannerCord, particleStart, particleEnd, widthOrHeight) {
    return (hasDetected(scannerCord, particleStart, particleEnd, widthOrHeight)) ? r.RED : r.WHITE;
}

function deriveVelocity(velocity, position, width, range1, range2) {
    return ifOutOfBounds(position, width, range1, range2)
        ? -velocity : velocity;
}

function ifOutOfBounds(position, width, minrange, maxrange) {
    return position < minrange || (position + width) > maxrange;
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