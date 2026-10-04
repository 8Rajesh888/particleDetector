const r = require("raylib");

function createScanner(d, w, h, s, e, v, cr, co) {
    return {
        dimension: d,
        width: w,
        height: h,
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

function updatesScanner(sx, p) {
    sx.velocity = deriveVelocity(sx);
    sx.coord = moveScanner(sx);
    sx.colour = deriveScannerColour(sx, p);
}

module.exports = {
    moveScanner,
    deriveScannerColour,
    deriveVelocity,
    // drawScanners,
    // drawParticles,
    updatesScanner,
    createScanner,
}