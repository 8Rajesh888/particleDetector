const r = require("raylib");

const screenWidth = 1700;
const screenHeight = 900;
const rectWidth = 20;

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
    return rectangleXAxis + rectWidth >= screenWidth;
}

function detectMove() {
    const detectorSpeed = 3;

    return ((rectangleXAxis < screenWidth) && isMovingForward) ? rectangleXAxis + detectorSpeed : rectangleXAxis - detectorSpeed;
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    r.DrawRectangle(rectangleXAxis, 0, rectWidth, screenHeight, r.WHITE);

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