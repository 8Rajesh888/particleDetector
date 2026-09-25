const r = require("raylib");

const screenWidth = 400;
const screenHeight = 400;
const FPS = 20;

let rectWidth = 200;
let rectHeight = 200;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(screenWidth, screenHeight, "Rectangle");
    r.SetTargetFPS(FPS);
}

function update() {

}

function draw() {

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);



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