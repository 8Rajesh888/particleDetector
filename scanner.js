const r = require("raylib");
const w = require("./window");

const s1 = {
    dimension: 100,
    start: 0,
    end: w.width / 2,
    coord: 0,
    velocity: 5,
    colour: r.WHITE,
}

const s2 = {
    dimension: 40,
    start: w.width / 2,
    end: w.width,
    coord: (w.width / 2) + 10,
    velocity: 3,
    colour: r.WHITE,
}

const s3 = {
    dimension: 40,
    start: 0,
    end: w.height,
    velocity: 6,
    colour: r.WHITE,
}

s3.coord = w.height - s3.dimension;

function hasDetected(scannerCoord, particleStart, particleEnd, widthOrHeight) {
    return scannerCoord + widthOrHeight >= particleStart
        && scannerCoord <= particleEnd;
}

function deriveScannerColour(scannerCoord, particleStart, particleEnd, widthOrHeight) {
    return (hasDetected(scannerCoord, particleStart, particleEnd, widthOrHeight)) ? r.RED : r.WHITE;
}

function deriveVelocity(velocity, position, width, range1, range2) {
    return ifOutOfBounds(position, width, range1, range2)
        ? -velocity : velocity;
}

function ifOutOfBounds(position, width, minrange, maxrange) {
    return position < minrange || (position + width) > maxrange;
}

function moveScanner(scannerCoord, Velocity) {
    return scannerCoord + Velocity;
}

module.exports = {
    moveScanner,
    deriveScannerColour,
    deriveVelocity,

    s1,
    s2,
    s3
    // s1Width,
    // s1Start,
    // s1End,
    // s1XCoord,
    // s1Velocity,
    // s1Colour,

    // s2Width,
    // s2Start,
    // s2End,
    // s2XCoord,
    // s2Velocity,
    // s2Colour,

    // s3Height,
    // s3Start,
    // s3End,
    // s3YCoord,
    // s3Velocity,
    // s3Colour
}