const r = require("raylib");
const s = require("./scanner");
const w = require("./window");
const p = require("./particle");


function running() {
    return !r.WindowShouldClose();
}

function setup() {
    const FPS = 50;
    const world = {};

    world.s1 = s.createScanner(100, 0, w.width / 2, 5, r.WHITE, 0);
    world.s2 = s.createScanner(40, w.width / 2, w.width, 3, r.WHITE, (w.width / 2) + 10);
    world.s3 = s.createScanner(40, 0, w.height, 6, r.WHITE);
    world.s3.coord = w.height - world.s3.dimension;

    world.p1 = p.createParticle(500, 790);
    world.p2 = p.createParticle(1300, 1315);
    world.p3 = p.createParticle(500, 600);

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(w.width, w.height, "PARTICLE DETECTOR");
    r.SetTargetFPS(FPS);

    return world;
}

function update(world) {
    s.updatesScanner(world.s1, world.p1);

    s.updatesScanner(world.s2, world.p2);

    s.updatesScanner(world.s3, world.p3);
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    s.drawParticles(world.p1, world.p2, world.p3);
    s.drawScanners(world.s1, world.s2, world.s3);

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