const r = require("raylib");
const s = require("./scanner");
const w = require("./window");
const p = require("./particle");

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    const FPS = 50;
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(w.width, w.height, "PARTICLE DETECTOR");
    r.SetTargetFPS(FPS);
}

function updatesS3() {
    s.s3Velocity = s.deriveVelocity(s.s3Velocity, s.s3YCord, s.s3Height, s.s3Start, s.s3End);
    s.s3YCord = s.moveScanner(s.s3YCord, s.s3Velocity);
    s.s3Colour = s.deriveScannerColour(s.s3YCord, p.p3Start, p.p3End, s.s3Height);
}


function updatesS2() {
    s.s2Velocity = s.deriveVelocity(s.s2Velocity, s.s2XCord, s.s2Width, s.s2Start, s.s2End);
    s.s2XCord = s.moveScanner(s.s2XCord, s.s2Velocity);
    s.s2Colour = s.deriveScannerColour(s.s2XCord, p.p2Start, p.p2End, s.s2Width);
}

function updatesS1() {
    s.s1Velocity = s.deriveVelocity(s.s1Velocity, s.s1XCord, s.s1Width, s.s1Start, s.s1End);
    s.s1XCord = s.moveScanner(s.s1XCord, s.s1Velocity);
    s.s1Colour = s.deriveScannerColour(s.s1XCord, p.p1Start, p.p1End, s.s1Width);
}

function update() {

    updatesS1();

    updatesS2();

    updatesS3();

}

function draw() {

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    drawParticles();
    drawScanners();

    r.EndDrawing();
}

function drawScanners() {
    const cord = 0;

    r.DrawRectangle(s.s1XCord, cord, s.s1Width, w.height, s.s1Colour);
    r.DrawRectangle(s.s2XCord, cord, s.s2Width, w.height, s.s2Colour);
    r.DrawRectangle(cord, s.s3YCord, w.width, s.s3Height, s.s3Colour);
}

function drawParticles() {
    const cord = 0;

    const particle1Width = p.p1End - p.p1Start;
    const particle2Width = p.p2End - p.p2Start;
    const particle3Width = p.p3End - p.p3Start;

    r.DrawRectangle(p.p1Start, cord, particle1Width, w.height, r.BLUE);
    r.DrawRectangle(p.p2Start, cord, particle2Width, w.height, r.BLUE);
    r.DrawRectangle(cord, p.p3Start, w.width, particle3Width, r.BLUE);
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