const r = require("raylib");
const s = require("./scanner");
const s1 = require("./scanner1");
const s2 = require("./scanner2");
const s3 = require("./scanner3");
const scr = require("./screen");
const p1 = require("./particle1");
const p2 = require("./particle2");
const p3 = require("./particle3");

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    const FPS = 50;
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(scr.width, scr.height, "PARTICLE DETECTOR");
    r.SetTargetFPS(FPS);
}

function update() {

    s1.velocity = s.calcVelocity(s1.velocity, s1.xCord, s1.width, s1.start, s1.end)
    s1.xCord = s.moveScanner(s1.xCord, s1.velocity);
    s1.colour = s.scannerColourChanger(s1.xCord, p1.start, p1.end, s1.width);

    s2.velocity = s.calcVelocity(s2.velocity, s2.xCord, s2.width, s2.start, s2.end)
    s2.xCord = s.moveScanner(s2.xCord, s2.velocity);
    s2.colour = s.scannerColourChanger(s2.xCord, p2.start, p2.end, s2.width);

    s3.velocity = s.calcVelocity(s3.velocity, s3.yCord, s3.height, s3.start, s3.end)
    s3.yCord = s.moveScanner(s3.yCord, s3.velocity);
    s3.colour = s.scannerColourChanger(s3.yCord, p3.start, p3.end, s3.height);

}

function draw() {
    const ZERO = 0;
    const particle1Width = p1.end - p1.start;
    const particle2Width = p2.end - p2.start;
    const particle3Width = p3.end - p3.start;

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    drawParticles(ZERO, particle1Width, particle2Width, particle3Width);
    drawScanners(ZERO);

    r.EndDrawing();
}

function drawScanners(ZERO) {
    r.DrawRectangle(s1.xCord, ZERO, s1.width, scr.height, s1.colour);
    r.DrawRectangle(s2.xCord, ZERO, s2.width, scr.height, s2.colour);
    r.DrawRectangle(ZERO, s3.yCord, scr.width, s3.height, s3.colour);
}

function drawParticles(ZERO, particle1Width, particle2Width, particle3Width) {
    r.DrawRectangle(p1.start, ZERO, particle1Width, scr.height, r.BLUE);
    r.DrawRectangle(p2.start, ZERO, particle2Width, scr.height, r.BLUE);
    r.DrawRectangle(ZERO, p3.start, scr.width, particle3Width, r.BLUE);
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