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

function drawScanners(s1, s2, s3) {
    const coord = 0;

    r.DrawRectangle(s1.coord, coord, s1.dimension, w.height, s1.colour);
    r.DrawRectangle(s2.coord, coord, s2.dimension, w.height, s2.colour);
    r.DrawRectangle(coord, s3.coord, w.width, s3.dimension, s3.colour);
}

function drawParticles(p1, p2, p3) {
    const coord = 0;

    const particle1Width = p1.end - p1.start;
    const particle2Width = p2.end - p2.start;
    const particle3Width = p3.end - p3.start;

    r.DrawRectangle(p1.start, coord, particle1Width, w.height, r.BLUE);
    r.DrawRectangle(p2.start, coord, particle2Width, w.height, r.BLUE);
    r.DrawRectangle(coord, p3.start, w.width, particle3Width, r.BLUE);
}

function updatesScanner(sx, p) {
    sx.velocity = s.deriveVelocity(
        sx.velocity,
        sx.coord,
        sx.dimension,
        sx.start,
        sx.end,
    );
    sx.coord = s.moveScanner(sx.coord, sx.velocity);
    sx.colour = s.deriveScannerColour(sx.coord, p.start, p.end, sx.dimension);
}

function update() {
    updatesScanner(s.s1, p.p1);

    updatesScanner(s.s2, p.p2);

    updatesScanner(s.s3, p.p3);
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    drawParticles(p.p1, p.p2, p.p3);
    drawScanners(s.s1, s.s2, s.s3);

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