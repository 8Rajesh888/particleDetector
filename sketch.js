const r = require("raylib");

const screenWidth = 1700;

const screenHeight = 900;
const scannerWidth = 40;

let rectangleXCord = 0;
let isMovingForward = true;
let colour;

const particle1Start = 500;
const particle1End = 800;

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
    rectangleXCord = moveScannerCord();

    if (isCollidingWall()) {
        isMovingForward = !isMovingForward;
    }
    colour = scannerColourChanger();
}

function isCollidingWall() {
    return isCollidingrightWall() || isCollidingLeftWall();
}

function isCollidingLeftWall() {
    return rectangleXCord <= 0 && !isMovingForward;
}

function isCollidingrightWall() {
    return rectangleXCord + scannerWidth >= screenWidth;
}

function moveScannerCord() {
    const scannerSpeed = 5;
    return ((rectangleXCord < screenWidth) && isMovingForward)
        ? rectangleXCord + scannerSpeed
        : rectangleXCord - scannerSpeed;
}

function scannerColourChanger() {
    return (isIntersectingParticles()) ? r.RED : r.WHITE;
}

function isIntersectingParticles() {
    return (isIntersectingParticle(particle1Start, particle1End) ||
        isIntersectingParticle(particle2Start, particle2End));

}

function isIntersectingParticle(particleStart, particleEnd) {
    return rectangleXCord + scannerWidth >= particleStart
        && rectangleXCord <= particleEnd;
}

function draw() {
    const particle1Width = particle1End - particle1Start;
    const particle2Width = particle2End - particle2Start;

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    r.DrawRectangle(particle1Start, 0, particle1Width, screenHeight, r.BLUE);
    r.DrawRectangle(particle2Start, 0, particle2Width, screenHeight, r.BLUE);
    r.DrawRectangle(rectangleXCord, 0, scannerWidth, screenHeight, colour);

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