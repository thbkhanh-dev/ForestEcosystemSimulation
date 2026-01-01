import * as THREE from 'three';
import { createScene, createCamera, createRenderer, createLights, createCelestialBodies, createGround, createOrbitControls, setupResizeHandler } from './scene.js';
import { updateDayNightCycle, updateTimeDisplay } from './dayNightCycle.js';
import { createPineTree, createRoundTree, createTallPine, createShrubTree, treeFunctions } from './objects/trees.js';
import { createRock, createRockCluster } from './objects/rocks.js';
import { createBush, createLargeBush } from './objects/bushes.js';
import { createMushroomCluster, createFlowerPatch, createGrassPatch } from './objects/vegetation.js';
import { getRandomPosition, checkCollision } from './utils.js';

// State
let currentTime = 720;
let isPlaying = false;
let timeSpeed = 30;

// Stats
const stats = {
    trees: 0,
    rocks: 0,
    bushes: 0,
    mushrooms: 0,
    flowers: 0,
    grassPatches: 0
};

// Initialize scene
const scene = createScene();
const camera = createCamera();
const renderer = createRenderer();
const lights = createLights(scene);
const celestialBodies = createCelestialBodies(scene);
const ground = createGround(scene);
const controls = createOrbitControls(camera, renderer);

// Scene objects for day/night cycle
const sceneObjects = {
    scene,
    sunLight: lights.sunLight,
    moonLight: lights.moonLight,
    ambientLight: lights.ambientLight,
    hemiLight: lights.hemiLight,
    sunMesh: celestialBodies.sunMesh,
    moonMesh: celestialBodies.moonMesh,
    sunMaterial: celestialBodies.sunMaterial,
    renderer
};

// Populate scene
const positions = [];

// Add trees
for (let i = 0; i < 60; i++) {
    let x, z;
    let attempts = 0;
    do {
        x = getRandomPosition(70);
        z = getRandomPosition(70);
        attempts++;
    } while (checkCollision(x, z, positions, 2.5) && attempts < 100);

    if (attempts < 100) {
        positions.push({ x, z });
        const scale = 0.6 + Math.random() * 0.9;
        const treeFunc = treeFunctions[Math.floor(Math.random() * treeFunctions.length)];
        scene.add(treeFunc(x, z, scale));
        stats.trees++;
    }
}

// Add rocks
for (let i = 0; i < 20; i++) {
    let x, z;
    let attempts = 0;
    do {
        x = getRandomPosition(65);
        z = getRandomPosition(65);
        attempts++;
    } while (checkCollision(x, z, positions, 1.5) && attempts < 80);

    if (attempts < 80) {
        positions.push({ x, z });
        const scale = 0.6 + Math.random() * 1.0;
        if (Math.random() > 0.4) {
            scene.add(createRock(x, z, scale));
        } else {
            scene.add(createRockCluster(x, z, scale));
        }
        stats.rocks++;
    }
}

// Add bushes
for (let i = 0; i < 25; i++) {
    let x, z;
    let attempts = 0;
    do {
        x = getRandomPosition(65);
        z = getRandomPosition(65);
        attempts++;
    } while (checkCollision(x, z, positions, 1.0) && attempts < 80);

    if (attempts < 80) {
        positions.push({ x, z });
        const scale = 0.7 + Math.random() * 0.6;
        if (Math.random() > 0.4) {
            scene.add(createBush(x, z, scale));
        } else {
            scene.add(createLargeBush(x, z, scale));
        }
        stats.bushes++;
    }
}

// Add mushroom clusters
for (let i = 0; i < 15; i++) {
    const x = getRandomPosition(60);
    const z = getRandomPosition(60);
    const scale = 0.8 + Math.random() * 0.5;
    scene.add(createMushroomCluster(x, z, scale));
    stats.mushrooms++;
}

// Add flower patches
for (let i = 0; i < 20; i++) {
    const x = getRandomPosition(60);
    const z = getRandomPosition(60);
    const scale = 0.8 + Math.random() * 0.5;
    scene.add(createFlowerPatch(x, z, scale));
    stats.flowers++;
}

// Add grass patches
for (let i = 0; i < 40; i++) {
    const x = getRandomPosition(65);
    const z = getRandomPosition(65);
    const scale = 0.8 + Math.random() * 0.6;
    scene.add(createGrassPatch(x, z, scale));
    stats.grassPatches++;
}

// Update stats display
document.getElementById('stats').innerHTML = `
    <strong>Scene Statistics:</strong><br>
    Trees: ${stats.trees}<br>
    Rocks: ${stats.rocks}<br>
    Bushes: ${stats.bushes}<br>
    Mushrooms: ${stats.mushrooms}<br>
    Flowers: ${stats.flowers}<br>
    Grass Patches: ${stats.grassPatches}
`;

// Setup resize handler
setupResizeHandler(camera, renderer);

// Expose to global scope for debugging
window.camera = camera;
window.controls = controls;
window.scene = scene;

// UI Controls
document.getElementById('play-btn').addEventListener('click', () => {
    isPlaying = true;
});

document.getElementById('stop-btn').addEventListener('click', () => {
    isPlaying = false;
});

document.getElementById('time-slider').addEventListener('input', (e) => {
    currentTime = parseFloat(e.target.value);
    updateDayNightCycle(currentTime, sceneObjects);
    updateTimeDisplay(currentTime);
});

document.getElementById('speed-slider').addEventListener('input', (e) => {
    timeSpeed = parseFloat(e.target.value);
    document.getElementById('speed-value').textContent = `${timeSpeed}x`;
});

// Animation loop
let lastTime = performance.now();

function animate(now) {
    requestAnimationFrame(animate);

    const delta = (now - lastTime) / 1000;
    lastTime = now;

    if (isPlaying) {
        currentTime += delta * timeSpeed;
        if (currentTime >= 1440) {
            currentTime = 0;
        }
        updateTimeDisplay(currentTime);
    }

    updateDayNightCycle(currentTime, sceneObjects);
    controls.update();
    renderer.render(scene, camera);
}

// Initialize
updateDayNightCycle(currentTime, sceneObjects);
updateTimeDisplay(currentTime);
animate(performance.now());
