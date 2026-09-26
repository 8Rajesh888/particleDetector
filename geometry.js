const r = require("raylib");
const screenWidth = 1600;
const screenHeight = 900;
const scannerWidth = 40;

function sqr(n) {
    return n * n;
}

function sqrt(n) {
    return n ** 0.5;
}

function distanceBtwnTwoPoints() {
    return sqrt(sqr((circle1x - circle2x)) + sqr((circle1y - circle2y)));
}

function getCenter(center, centerofrect, size) {
    return center + (centerofrect - size) / 2;
}

function isOverlapping(scannerCord, particleStart, particleEnd) {
    return scannerCord + scannerWidth >= particleStart
        && scannerCord <= particleEnd;
}

function scannerColourChanger(scannerCord, particleStart, particleEnd) {
    return (isOverlapping(scannerCord, particleStart, particleEnd)) ? r.RED : r.WHITE;
}

function isCollidingSecondWall(scannerXCord, isScannerMovingForward, rightWall) {
    return scannerXCord <= rightWall && !isScannerMovingForward;
}

function isCollidingFirstWall(scannerXCord, leftWall, isScannerMovingForward) {
    return scannerXCord + scannerWidth >= leftWall && isScannerMovingForward;
}

function isCollidingWall(scannerXCord, isScannerMovingForward, rightWall, leftWall) {
    return isCollidingFirstWall(scannerXCord, leftWall, isScannerMovingForward)
        || isCollidingSecondWall(scannerXCord, isScannerMovingForward, rightWall);
}

function moveScanner(scannerCord, leftWall, isScannerMovingForward, scannerSpeed) {
    return ((scannerCord < leftWall) && isScannerMovingForward)
        ? scannerCord + scannerSpeed
        : scannerCord - scannerSpeed;
}

module.exports = {
    moveScanner,
    isCollidingWall,
    scannerColourChanger,
    sqr,
    sqrt,
    getCenter,
    distanceBtwnTwoPoints,
}