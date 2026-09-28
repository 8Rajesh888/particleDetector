const r = require("raylib");
const s = require("./scanner");
const s1 = require("./scanner1");
const s2 = require("./scanner2");
const s3 = require("./scanner3");
const w = require("./window");
const p = require("./particle");
// const p2 = require("./particle2");
// const p3 = require("./particle3");

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
    s3.velocity = s.deriveVelocity(s3.velocity, s3.yCord, s3.height, s3.start, s3.end);
    s3.yCord = s.moveScanner(s3.yCord, s3.velocity);
    s3.colour = s.deriveScannerColour(s3.yCord, p.p3start, p.p3end, s3.height);
}


function updatesS2() {
    s2.velocity = s.deriveVelocity(s2.velocity, s2.xCord, s2.width, s2.start, s2.end);
    s2.xCord = s.moveScanner(s2.xCord, s2.velocity);
    s2.colour = s.deriveScannerColour(s2.xCord, p.p2start, p.p2end, s2.width);
}

function updatesS1() {
    s1.velocity = s.deriveVelocity(s1.velocity, s1.xCord, s1.width, s1.start, s1.end);
    s1.xCord = s.moveScanner(s1.xCord, s1.velocity);
    s1.colour = s.deriveScannerColour(s1.xCord, p.p1start, p.p1end, s1.width);
}

function update() {

    updatesS1();

    updatesS2();

    updatesS3();

}

function draw() {
    const particle1Width = p.p1end - p.p1start;
    const particle2Width = p.p2end - p.p2start;
    const particle3Width = p.p3end - p.p3start;

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    drawParticles(particle1Width, particle2Width, particle3Width);
    drawScanners();

    r.EndDrawing();
}

function drawScanners() {
    const cord = 0;
    r.DrawRectangle(s1.xCord, cord, s1.width, w.height, s1.colour);
    r.DrawRectangle(s2.xCord, cord, s2.width, w.height, s2.colour);
    r.DrawRectangle(cord, s3.yCord, w.width, s3.height, s3.colour);
}

function drawParticles(particle1Width, particle2Width, particle3Width) {
    const cord = 0;
    r.DrawRectangle(p.p1start, cord, particle1Width, w.height, r.BLUE);
    r.DrawRectangle(p.p2start, cord, particle2Width, w.height, r.BLUE);
    r.DrawRectangle(cord, p.p3start, w.width, particle3Width, r.BLUE);
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