const r = require("raylib");
const w = require("./window");



function createScanner(d, s, e, v, cr, co) {
    return {
        dimension: d,
        start: s,
        end: e,
        coord: co,
        velocity: v,
        colour: cr,
    }
}

function hasDetected(s, p) {
    return s.coord + s.dimension >= p.start
        && s.coord <= p.end;
}

function deriveScannerColour(s, p) {
    return (hasDetected(s, p)) ? r.RED : r.WHITE;
}

function deriveVelocity(s) {
    return ifOutOfBounds(s)
        ? -(s.velocity) : (s.velocity);
}

function ifOutOfBounds(s) {
    return s.coord < s.start || (s.coord + s.dimension) > s.end;
}

function moveScanner(s) {
    return s.coord + s.velocity;
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
    sx.velocity = deriveVelocity(sx);
    sx.coord = moveScanner(sx);
    sx.colour = deriveScannerColour(sx, p);
}

module.exports = {
    moveScanner,
    deriveScannerColour,
    deriveVelocity,
    drawScanners,
    drawParticles,
    updatesScanner,
    createScanner,
}