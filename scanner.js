const r = require("raylib");

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
    deriveVelocity
}