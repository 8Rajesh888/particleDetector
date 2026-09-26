const r = require("raylib");
const g = require("./geometry");

const screenWidth = 1600;
const screenHeight = 900;
const scannerWidth = 40;

let scanner1XCord = 0;
let isScanner1MovingForward = true;
let scanner1Colour;

let scanner2XCord = screenWidth - scannerWidth;
let isScanner2MovingForward = false;
let scanner2Colour;

let scanner3YCord = screenHeight - scannerWidth;
let isScanner3MovingDownward = false;
let scanner3Colour;

const particle1Start = 500;
const particle1End = 790;

const particle2Start = 1300;
const particle2End = 1315;

const particle3Start = 500;
const particle3End = 600;

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
    const scanner3Speed = 5;

    scanner1XCord = g.moveScanner(scanner1XCord, (screenWidth / 2), isScanner1MovingForward, scanner1Speed);
    scanner2XCord = g.moveScanner(scanner2XCord, screenWidth, isScanner2MovingForward, scanner2Speed);
    scanner3YCord = g.moveScanner(scanner3YCord, screenHeight, isScanner3MovingDownward, scanner3Speed);

    if (g.isCollidingWall(scanner1XCord, isScanner1MovingForward, 0, (screenWidth / 2))) {
        isScanner1MovingForward = !isScanner1MovingForward;
    }

    if (g.isCollidingWall(scanner2XCord, isScanner2MovingForward, (screenWidth / 2), screenWidth)) {
        isScanner2MovingForward = !isScanner2MovingForward;
    }

    if (g.isCollidingWall(scanner3YCord, isScanner3MovingDownward, 0, screenHeight)) {
        isScanner3MovingDownward = !isScanner3MovingDownward;
    }

    scanner1Colour = g.scannerColourChanger(scanner1XCord, particle1Start, particle1End);
    scanner2Colour = g.scannerColourChanger(scanner2XCord, particle2Start, particle2End);
    scanner3Colour = g.scannerColourChanger(scanner3YCord, particle3Start, particle3End);
}

function draw() {
    const particle1Width = particle1End - particle1Start;
    const particle2Width = particle2End - particle2Start;
    const particle3Width = particle3End - particle3Start;

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    const ZERO = 0;

    r.DrawRectangle(particle1Start, ZERO, particle1Width, screenHeight, r.BLUE);
    r.DrawRectangle(particle2Start, ZERO, particle2Width, screenHeight, r.BLUE);
    r.DrawRectangle(ZERO, particle3Start, screenWidth, particle3Width, r.BLUE);
    r.DrawRectangle(scanner1XCord, ZERO, scannerWidth, screenHeight, scanner1Colour);
    r.DrawRectangle(scanner2XCord, ZERO, scannerWidth, screenHeight, scanner2Colour);
    r.DrawRectangle(ZERO, scanner3YCord, screenWidth, scannerWidth, scanner3Colour);

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