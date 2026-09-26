const r = require("raylib");

const screenWidth = 1600;
const screenHeight = 900;
const scannerWidth = 40;

let scanner1XCord = 0;
let isScanner1MovingForward = true;
let scanner1Colour;

let scanner2XCord = screenWidth - scannerWidth;
let isScanner2MovingForward = false;
let scanner2Colour;

const particle1Start = 500;
const particle1End = 790;

const particle2Start = 1300;
const particle2End = 1315;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    const FPS = 50;

    r.InitWindow(screenWidth, screenHeight, "PARTICLE DETECTOR");
    r.SetTargetFPS(FPS);
}

function update() {
    const scanner1Speed = 10;
    const scanner2Speed = 5;

    scanner1XCord = moveScannerCord(scanner1XCord, (screenWidth / 2), isScanner1MovingForward, scanner1Speed);
    scanner2XCord = moveScannerCord(scanner2XCord, screenWidth, isScanner2MovingForward, scanner2Speed);

    if (isCollidingWall(scanner1XCord, isScanner1MovingForward, 0, (screenWidth / 2))) {
        isScanner1MovingForward = !isScanner1MovingForward;
    }

    if (isCollidingWall(scanner2XCord, isScanner2MovingForward, (screenWidth / 2), screenWidth)) {
        isScanner2MovingForward = !isScanner2MovingForward;
    }

    scanner1Colour = scannerColourChanger(scanner1XCord);
    scanner2Colour = scannerColourChanger(scanner2XCord);
}

function isCollidingWall(scannerXCord, isScannerMovingForward, rightWall, leftWall) {
    return isCollidingLeftWall(scannerXCord, leftWall)
        || isCollidingRightWall(scannerXCord, isScannerMovingForward, rightWall);
}

function isCollidingRightWall(scannerXCord, isScannerMovingForward, rightWall) {
    return scannerXCord <= rightWall && !isScannerMovingForward;
}

function isCollidingLeftWall(scannerXCord, leftWall) {
    return scannerXCord + scannerWidth >= leftWall;
}

function moveScannerCord(scannerXCord, leftWall, isScannerMovingForward, scannerSpeed) {
    return ((scannerXCord < leftWall) && isScannerMovingForward)
        ? scannerXCord + scannerSpeed
        : scannerXCord - scannerSpeed;
}

function scannerColourChanger(scannerXCord) {
    return (isIntersectingParticles(scannerXCord)) ? r.RED : r.WHITE;
}

function isIntersectingParticles(scannerXCord) {
    return (isIntersectingParticle(scannerXCord, particle1Start, particle1End) ||
        isIntersectingParticle(scannerXCord, particle2Start, particle2End));

}

function isIntersectingParticle(scannerXCord, particleStart, particleEnd) {
    return scannerXCord + scannerWidth >= particleStart
        && scannerXCord <= particleEnd;
}

function draw() {
    const particle1Width = particle1End - particle1Start;
    const particle2Width = particle2End - particle2Start;

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    r.DrawRectangle(particle1Start, 0, particle1Width, screenHeight, r.BLUE);
    r.DrawRectangle(particle2Start, 0, particle2Width, screenHeight, r.BLUE);
    r.DrawRectangle(scanner1XCord, 0, scannerWidth, screenHeight, scanner1Colour);
    r.DrawRectangle(scanner2XCord, 0, scannerWidth, screenHeight, scanner2Colour);

    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};