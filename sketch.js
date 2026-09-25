const r = require("raylib");

const screenWidth = 1700;

const screenHeight = 900;
const detectWidth = 20;

let rectangleXAxis = 0;
let isMovingForward = true;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    const FPS = 50;

    r.InitWindow(screenWidth, screenHeight, "PARTICLE DETECTOR");
    r.SetTargetFPS(FPS);
}

function update() {
    rectangleXAxis = detectMove();

    if (isCollidingWall()) {
        isMovingForward = !isMovingForward;
    }
}

function isCollidingWall() {
    return isCollidingrightWall() || isCollidingLeftWall();
}

function isCollidingLeftWall() {
    return rectangleXAxis <= 0 && !isMovingForward;
}

function isCollidingrightWall() {
    return rectangleXAxis + detectWidth >= screenWidth;
}

function detectMove() {
    const detectorSpeed = 1;

    return ((rectangleXAxis < screenWidth) && isMovingForward) ? rectangleXAxis + detectorSpeed : rectangleXAxis - detectorSpeed;
}

function draw() {
    const particleStart = 400;
    const particleEnd = 500;
    const particleWidth = particleEnd - particleStart;

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);


    r.DrawRectangle(particleStart, 0, particleWidth, screenHeight, r.BLUE);
    r.DrawRectangle(rectangleXAxis, 0, detectWidth, screenHeight, r.WHITE);

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