import * as THREE from 'three';
import { materials } from '../materials.js';

export function createMushroom(x, z, scale = 1) {
    const mushroom = new THREE.Group();
    const capMaterial = Math.random() > 0.5 ? materials.mushroomCap : materials.mushroomCapBrown;

    const stemGeometry = new THREE.CylinderGeometry(
        0.05 * scale, 0.07 * scale, 0.2 * scale, 6
    );
    const stem = new THREE.Mesh(stemGeometry, materials.mushroomStem);
    stem.position.y = 0.1 * scale;
    stem.castShadow = true;
    mushroom.add(stem);

    const capGeometry = new THREE.SphereGeometry(0.12 * scale, 8, 6, 0, Math.PI * 2, 0, Math.PI / 2);
    const cap = new THREE.Mesh(capGeometry, capMaterial);
    cap.position.y = 0.2 * scale;
    cap.castShadow = true;
    mushroom.add(cap);

    mushroom.position.set(x, 0, z);
    return mushroom;
}

export function createMushroomCluster(x, z, scale = 1) {
    const cluster = new THREE.Group();
    const count = 3 + Math.floor(Math.random() * 4);

    for (let i = 0; i < count; i++) {
        const mushroom = createMushroom(0, 0, 0.5 + Math.random() * 0.5);
        mushroom.position.set(
            (Math.random() - 0.5) * 0.5 * scale,
            0,
            (Math.random() - 0.5) * 0.5 * scale
        );
        cluster.add(mushroom);
    }

    cluster.position.set(x, 0, z);
    return cluster;
}

export function createFlower(x, z, scale = 1) {
    const flower = new THREE.Group();
    const flowerMaterials = [materials.flowerRed, materials.flowerYellow, materials.flowerWhite, materials.flowerPurple];
    const petalMaterial = flowerMaterials[Math.floor(Math.random() * flowerMaterials.length)];

    const stemGeometry = new THREE.CylinderGeometry(0.02 * scale, 0.02 * scale, 0.3 * scale, 4);
    const stem = new THREE.Mesh(stemGeometry, materials.flowerStem);
    stem.position.y = 0.15 * scale;
    flower.add(stem);

    const centerGeometry = new THREE.SphereGeometry(0.04 * scale, 6, 6);
    const center = new THREE.Mesh(centerGeometry, materials.flowerYellow);
    center.position.y = 0.32 * scale;
    flower.add(center);

    const petalCount = 5;
    for (let i = 0; i < petalCount; i++) {
        const angle = (i / petalCount) * Math.PI * 2;
        const petalGeometry = new THREE.SphereGeometry(0.03 * scale, 4, 4);
        const petal = new THREE.Mesh(petalGeometry, petalMaterial);
        petal.position.set(
            Math.cos(angle) * 0.06 * scale,
            0.32 * scale,
            Math.sin(angle) * 0.06 * scale
        );
        petal.scale.set(1.5, 0.5, 1);
        flower.add(petal);
    }

    flower.position.set(x, 0, z);
    return flower;
}

export function createFlowerPatch(x, z, scale = 1) {
    const patch = new THREE.Group();
    const count = 5 + Math.floor(Math.random() * 8);

    for (let i = 0; i < count; i++) {
        const flower = createFlower(0, 0, 0.8 + Math.random() * 0.4);
        flower.position.set(
            (Math.random() - 0.5) * 1.5 * scale,
            0,
            (Math.random() - 0.5) * 1.5 * scale
        );
        patch.add(flower);
    }

    patch.position.set(x, 0, z);
    return patch;
}

export function createGrassPatch(x, z, scale = 1) {
    const grass = new THREE.Group();
    const bladeCount = 8 + Math.floor(Math.random() * 8);

    for (let i = 0; i < bladeCount; i++) {
        const bladeGeometry = new THREE.ConeGeometry(0.02 * scale, 0.2 * scale, 4);
        const blade = new THREE.Mesh(bladeGeometry, materials.grass);
        blade.position.set(
            (Math.random() - 0.5) * 0.4 * scale,
            0.1 * scale,
            (Math.random() - 0.5) * 0.4 * scale
        );
        blade.rotation.x = (Math.random() - 0.5) * 0.3;
        blade.rotation.z = (Math.random() - 0.5) * 0.3;
        grass.add(blade);
    }

    grass.position.set(x, 0, z);
    return grass;
}
