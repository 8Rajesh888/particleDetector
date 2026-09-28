const r = require("raylib");

function hasDetected(scannerCord, particleStart, particleEnd, widthOrHeight) {
    return scannerCord + widthOrHeight >= particleStart
        && scannerCord <= particleEnd;
}

function scannerColourChanger(scannerCord, particleStart, particleEnd, widthOrHeight) {
    return (hasDetected(scannerCord, particleStart, particleEnd, widthOrHeight)) ? r.RED : r.WHITE;
}

function calcVelocity(velocity, start, width, range1, range2) {
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
    scannerColourChanger,
    calcVelocity
}