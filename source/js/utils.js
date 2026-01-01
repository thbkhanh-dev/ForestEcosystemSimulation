export function getRandomPosition(range) {
    return (Math.random() - 0.5) * range;
}

export function checkCollision(x, z, existingPositions, minDistance) {
    for (const pos of existingPositions) {
        const dx = x - pos.x;
        const dz = z - pos.z;
        if (Math.sqrt(dx * dx + dz * dz) < minDistance) {
            return true;
        }
    }
    return false;
}
