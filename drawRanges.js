
function drawScanners(s1, s2, s3) {
    const coord = 0;

    r.DrawRectangle(s1.coord, coord, s1.width, s1.height, s1.colour);
    r.DrawRectangle(s2.coord, coord, s2.width, s2.height, s2.colour);
    r.DrawRectangle(coord, s3.coord, s3.width, s3.height, s3.colour);
}

function drawParticles(p1, p2, p3) {
    const coord = 0;

    r.DrawRectangle(p1.start, coord, p1.width, p1.height, r.BLUE);
    r.DrawRectangle(p2.start, coord, p2.width, p2.height, r.BLUE);
    r.DrawRectangle(coord, p3.start, p3.width, p3.height, r.BLUE);
}

module.exports = {
    drawScanners,
    drawParticles,
}